## 目的：nodejs开发就是想用js来开发web服务器

## http协议
- 你要了解http的基本协议

## HTTP服务器
- 由nodejs的request和response两个对象来做HTTP协议  
request对象封装了HTTP请求，调用request对象和属性可以拿到HTTP请求的所有信息。  
response对象封装了HTTP响应，我们操作response对象的方法可以把HTTP的响应返回给浏览器。

**如果是单单创建这样的服务器很容易，但是需要读取文件内容之类的融合在一起就会显得很麻烦**
> 思路大概就是：
> 引入http模块，并且创建server，你可以去获取request的信息来做一些判断，同时你也可以response.writeHead(200,{'Content-Type','text/html'})
> response.end('<h1>hello word!</h1>')
> server.listen(3000);用来监听3000端口的。

## 其他的模块
- url模块:利用url.parse('http://www.baidu.com');将一个字符串解析成一个url对象。
- path模块：处理本地文件的时候，可以利用这个模块来构建目录 ，`var workDir = path.resolve('.') //解析当前的目录`，path.join(a,b,c);
- fs模块;这个就不用多说了。值得注意的是response也是writable Stream，直接pipe()方法就实现自动读取文件内容并且输出，fs.createReadStream(filepath).pipe(response);


