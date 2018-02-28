"use strict";

try{
    var fs = require('fs');

    var data = fs.readFileSync('sample.txt','utf-8');

    console.log(data);
}catch(err){
    console.log(err);
    console.log('读取sample.txt文件时出错！')
}

