var db=require("../lib/db.js");
var express=require("express");
var app=express();
 app.get("/show",function(req,res){
 res.append("Access-Control-Allow-Origin", "*");
  db.query("spnews",{},function(data){
     res.send(data);
  });
});
app.listen(9000);