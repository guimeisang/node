'use strict';

var fs = require('fs');

var rs = fs.createReadStream('sample.txt','utf-8');
rs.on('data',function(chunk){
    console.log('data start...');
    console.log(chunk);
});
rs.on('end',function(){
    console.log('end....')
})


var ws = fs.createWriteStream('copied.txt');

rs.pipe(ws,{end:false});
ws.write(new Buffer('\n\n\n这是在使用pipe操作之后，我再添加的内容！！！','utf-8'))