var db = require("../lib/db.js");
var request = require("request");
var express = require("express");
var app = express();
// 处理post请求
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}));
// parse application/json
app.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'spnews';
//数据渲染接口
app.get("/show", function(req, res) {
	res.append("Access-Control-Allow-Origin", "*");
	db.query("spnews", {}, function(data) {
		res.send(data);
	});
});
//验证用户名是否被注册接口
app.get("/yzyhm", function(req, res) {
	res.append("Access-Control-Allow-Origin", "*");
	db.query("user", {
		username: req.query.username
	}, function(data) {
		//		console.log(data);
		res.send(data);
	});
});
//登陆接口
app.get("/dl", function(req, res) {
	res.append("Access-Control-Allow-Origin", "*");
	db.query("user", {
		username: req.query.username,
		password: req.query.password
	}, function(data) {
//		console.log(data)

//		console.log(req.query)
		if(data.length >= 1) {
			res.send("登陆成功");
		} else {
			res.send("登陆失败");
		}

	});
});
//注册接口
app.post("/resite", function(req, res) {
	res.append("Access-Control-Allow-Origin", "*");
	MongoClient.connect(url, function(err, client) {
		assert.equal(null, err);
//		console.log("连接成功");
		var db = client.db(dbName);
		db.collection('user').insert([{
			username: req.body.username,
			password: req.body.password,
		}], function(err, result) {
//			console.log("插入成功")
			res.send("注册成功")
		});
		client.close();
	});
});
//商品详情页面接口
app.get("/shows", function(req, res) {
	res.append("Access-Control-Allow-Origin", "*");
//	console.log(req.query._id)
	db.query("shoppinglist", {
		_id: req.query._id * 1
	}, function(data) {
		res.send(data);
		//		console.log(data)
	});
});
//商品品类接口
app.get("/pl", function(req, res) {
	res.append("Access-Control-Allow-Origin", "*");
//	console.log(req.query._id)
	request("https://shop.vivo.com.cn/wap/product/remark.json?spuId=" + req.query._id, function(err, resr, body) {
		res.send(body);
//		console.log(body)
	})
})
//购物车接口
app.post("/scar", function(req, res) {
	res.append("Access-Control-Allow-Origin", "*");
	MongoClient.connect(url, function(err, client) {
		assert.equal(null, err);
		console.log(req.body.username);
		console.log(req.body.spdata);
		var db = client.db(dbName);
		db.collection('shoppingcar').insert([{
			username: req.body.username,
//			data: req.body.spdata[0][v1],
		}], function(err, result) {
			console.log("插入成功")
			res.send("成功加入购物车")
		});
		client.close();
	});
});
app.listen(9000);