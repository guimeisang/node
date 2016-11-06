## fs模块
> 没事多看看API，[这里](http://nodeapi.ucdok.com/api/fs.html#fs_fs_writesync_fd_buffer_offset_length_position_11265)
Node.js内置的fs模块就是文件系统模块，负责读写文件。  
和所有其它JavaScript模块不同的是，fs模块同时提供了异步和同步的方法。  

### 同步还是异步

由于node是单线程的，如果是同步的话，可能会造成后面的代码无法往下面读，所以一般是推荐采取异步。
如果是服务器启动的时候需要读取配置文件，或者是结束时需要写入状态文件时。可以使用同步的写法。因为只是在开始和结束的时候执行一次。不影响服务器正常的异步执行。  


### 同目录下面有一些案例，可供参考。多用多琢磨才能真正的掌握！

当读取二进制文件时，不传入文件编码时，回调函数的data参数是返回一个Buffer对象。在node中
，Buffer对象就是一个包含零个或者是任意个字节的数组（注意和ARRAY不同），Buffer对象可以和
String做转换，例如，把一个Buffer对象转换成String：
```
// Buffer -> String,此时data是Buffer对象
var text = data.toString('utf-8');
console.log(text);
```
或者是将String转换成Buffe对象
```
// String -> Buffer(text是字符串)
var buf = new Buffer(text, 'utf-8');
console.log(buf);
```

