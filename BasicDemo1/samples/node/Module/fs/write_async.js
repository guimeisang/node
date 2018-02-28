"use strict";

var fs =require('fs');

var data = "kevin加油琢磨node，总有一天会有回报的！"
fs.writeFile('sample.txt',data,function(err){
    if(err){
        console.log('出错了！');
    }else{
        console.log('异步写入没问题！');
    }
})
console.log('我就看看是不是异步的...');

//如果是该文件不存的时候，会自动生成一个文件
//具体请看node中文文档，相当的详尽！