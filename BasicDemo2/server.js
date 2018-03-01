//1. basic server.js

// const http = require("http"),
//   server = http.createServer();

// server.on("request", (request, response) => {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.write("Hello world");
//   response.end();
// });

// server.listen(3000, () => {
//   console.log("Node server created at port 3000");
// });

//2. change use

// const http = require('http'),
// server = http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.write('Hello world');
//     response.end();
// });
// server.listen(3000,()=>{
//     console.log('Node server created at port 3000');
// });

// 3. 习惯回调函数 的思想  (推荐promise处理复杂的回调)

const http = require('http'),

makeServer = function (request,response){
   response.writeHead(200,{'Content-Type':'text/plain'});
   response.write('Hello world');
   response.end();
},

server = http.createServer(makeServer);

server.listen(3000,()=>{
  console.log('Node server created at port 3000')
});

