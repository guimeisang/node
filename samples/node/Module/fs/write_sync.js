'use strict'
//如果是该文件不存的时候，会自动生成一个文件

var fs = require('fs');

var data = "kevin加油琢磨node，总有一天会有回报的！——同步的"
fs.writeFileSync('sample1.txt',data);
console.log('我就看看是不是同步的...');