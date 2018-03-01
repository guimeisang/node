//4. NodeJS路由
const http = require('http'),
url = require('url'),
makeServer = function(request, response){
    let path = url.parse(request.url).pathname;
    console.log(path);

    if(path === '/'){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello world , I am router');
    }
    else if(path === '/us'){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('us');
    }
    else if(path === '/home'){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('home');
    }else{
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Error page');
    }
    response.end();
},
server = http.createServer(makeServer);

server.listen(3000, ()=>{
    console.log('listen to port 3000')
})
