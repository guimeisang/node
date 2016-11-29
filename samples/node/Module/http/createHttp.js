'use strict'
var http = require('http');

//创建http sever 并传入回调函数：
var server = http.createServer(function(request,response){
    //回调函数接收request和response对象
    console.log(request.method+':'+request.url);
    //将http响应200写入response，同时设置content-type：text/html
    response.writeHead(200,{'Content-Type':'text/html'});
    //将HTTP响应的HTML内容写入response
    response.end('<h1>Hello world!</h1>');
})

//让服务器监听8080端口
server.listen(8080);

console.log('server is running at http://127.0.0.1.8080');





