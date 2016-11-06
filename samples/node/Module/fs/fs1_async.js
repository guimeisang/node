"sue strict";

var fs = require('fs');

fs.readFile('sample.txt','utf8',function(err,data){
	if(err){
	    console.log(err);
	}else{
		console.log(data);
	}
});
console.log('我就想看看谁跟快！')
