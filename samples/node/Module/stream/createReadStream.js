"sue strict";

var fs = require('fs');

//获取一个读取的流，并且看下，data，end，err事件
var rs = fs.createReadStream('sample.txt','utf-8');

rs.on('data',function(chunk){
    console.log('data...');
    console.log(chunk);
})
rs.on('end',function(){
    console.log('end...');
})
rs.on('error',function(err){
    console.log("Error"+err);
})

//data事件可能是分多次的，所以每次传递chunk是流的一部分数据。