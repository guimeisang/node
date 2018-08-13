/**
 * 这是一个临时的文件，用来跑跑代码的
 */

var fs = require('fs');

fs.readFile('Docs/not/exit', handleFile);

function handleFile(err, result){
    if(err){
        console.log(err);
        return console.error('there is an error')
    }
    // else deal other thing
}