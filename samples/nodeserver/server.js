var http = require('http');

//处理url的模块
var url = require('url');

//文件系统模块
var fs = require('fs');

//path模块，路径解析，得到规范化的路径格式
var path = require('path');

//引入文件扩展名
var contenttype = require('./contentType');

var server = http.createServer(function(req, res) {
	
	//req为请求，res为回应，
	//解析url，返回一个json格式的数组，里面有很多值，我们常用到的就是pathname，path，href，第二个参数为true的时候，则juery不再是字符串而是经过querystring模块转换后的参数对象
    var params = url.parse(req.url, true);

	
    if (params.pathname == '/getData') {
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8",
            // "Access-Control-Allow-Origin": "*"
        });
        res.write('hello, 数据获取成功！');
        res.end();
    }else if(params.pathname == '/getCity'){
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8",
            // "Access-Control-Allow-Origin": "*"
        });
        res.write('[{"id":110100,"name":"北京市","regions":[{"id":110101,"name":"东城区"},{"id":110102,"name":"西城区"},{"id":110103,"name":"崇文区"},{"id":110104,"name":"宣武区"},{"id":110105,"name":"朝阳区"},{"id":110106,"name":"丰台区"},{"id":110107,"name":"石景山区"},{"id":110108,"name":"海淀区"},{"id":110109,"name":"门头沟区"},{"id":110111,"name":"房山区"},{"id":110112,"name":"通州区"},{"id":110113,"name":"顺义区"},{"id":110114,"name":"昌平区"},{"id":110115,"name":"大兴区"},{"id":110116,"name":"怀柔区"},{"id":110117,"name":"平谷区"},{"id":110228,"name":"密云县"},{"id":110229,"name":"延庆县"}]},{"id":440100,"name":"广州市","regions":[{"id":440103,"name":"荔湾区"},{"id":440104,"name":"越秀区"},{"id":440105,"name":"海珠区"},{"id":440106,"name":"天河区"},{"id":440111,"name":"白云区"},{"id":440112,"name":"黄埔区"},{"id":440113,"name":"番禺区"},{"id":440114,"name":"花都区"},{"id":440115,"name":"南沙区"},{"id":440116,"name":"萝岗区"},{"id":440183,"name":"增城市"},{"id":440184,"name":"从化市"}],"pinyin":"GuangZhouShi","hot":true}]');
        res.end();
    } else if (params.pathname == '/getJSONP') {
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8",
            // "Access-Control-Allow-Origin": "*"
        });
        var data = {
            name: '王大锤',
            age: 30,
            sex: '男',
            married:false
        }
        
        //解析url里面有一个参数为query，其为url中的键值对：a=b 
        if (params.query && params.query.callback) {
            var str = params.query.callback + '(' + JSON.stringify(data) + ')';
            res.write(str);
        } else {
            res.write(JSON.stringify(data));
        }
        res.end();
    }else if(params.pathname == '/check'){
    	//这个是check注册名是否重复了
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        });
        var names = ['张三','李四','王尼玛','奥巴马'];
        if (params.query && params.query.username) {
            var name = params.query.username;
            if(names.indexOf(name) != -1){
                res.write('false');
            }else{
                res.write('true');
            }
        }
        res.end();
    }else if(params.pathname == '/football'){
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        
        // var data = fs.readFileSync('./football.json');console.log(data);
        var data = require('./football.json');
        var output = {total:data.length};
        if (params.query && params.query.pageNo) {
            var page = params.query.pageNo;
            var pageCount = params.query.pageCount || 10;
            
            //将需要获取数据，赋值给output的data，将pageNo和pageCount也赋值到output对象中
            output.data = data.slice((page-1)*pageCount,page*pageCount);
            output.pageNo = page;
            output.pageCount = pageCount;
            
            //将最后的output写到response中，返回到ajax的success函数
            res.write(JSON.stringify(output));
        }else{
            res.write(JSON.stringify(output));
        }
        res.end();
    }else{
        var pathname = params.pathname
        if (pathname.slice(-1) === "/") {
            pathname += 'index.html'; //默认取当前默认下的index.html
        }
        
        //path.join结合，合并，path.extname：获取路径中的扩展名，
        var realPath = path.join(process.cwd(), pathname);
        var ext = path.extname(realPath);
        ext = ext ? ext.slice(1) : 'unknown';
        
        //fs.exists：测试某个路径下的文件是否存在。
        fs.exists(realPath, function(exists) {
            if (!exists) {
            	
            	//不存在时，显示404
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('This request URL' + pathname + ' was not found on this server.');
                res.end();
            } else {
            	
            	//存在时，直接读取文件
                fs.readFile(realPath, 'binary', function(err, file) {
                    if (err) {
                        res.writeHead(500, {
                            'Content-Type': 'text/plain'
                        });
                        res.end(err);
                    } else {
                        var contentType = contenttype.types[ext] || 'text/plain';
                        res.writeHead(200, {
                            'Content-Type': contentType
                        });
                        res.write(file, 'binary');
                        res.end();
                    }
                });
            }
        });
    }
    
});

//服务器监听3000端口
server.listen(3000,function(){
    console.log('http://localhost:3000')
});
