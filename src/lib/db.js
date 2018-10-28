
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'spnews';

// Use connect method to connect to the server
// Redis

function query(tablename, params, callback) {
	MongoClient.connect(url, function(err, client) {
		assert.equal(null, err);
		console.log("Connected successfully to server");
		const db = client.db(dbName);
		//查
		db.collection(tablename).find(params).toArray(function(err, docs) {
			assert.equal(err, null);
			console.log(docs);
			callback(docs)
		});
		//关闭数据库
		client.close();
	});
}
console.log("开始使用mongodb");

module.exports = {
	query: query
}