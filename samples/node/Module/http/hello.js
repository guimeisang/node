'use strict'

//引入http模块
var http = require('http');

//创建服务器
var server = http.createServer(function(req,resp){
    //获取http中请求中的url和method
    console.log(req.method+':'+req.url);
    // 将http响应200写入到response，同时设置content-Type:text/html:
    resp.writeHead(200,{'Content-Type':'text/html'});
    //将http响应的内容写入到resp
    resp.end('<h1>hello word!</h1>');
})

//监听服务器
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/')

