    var request=require("request");
    function getinput(body){
        return new Promise(function (resolve,reject){
                request("https://shop.vivo.com.cn/wap/product/remark.json?spuId=10514", function(err, res, body) {
                console.log(body)
      
    })
  })
}

getinput();