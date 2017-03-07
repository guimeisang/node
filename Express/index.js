/**
 * Created by guimei on 2017-03-06 .
 */
var express = require('express');
var app = express();

app.use(function(req,res,next){
    console.log('1');
    next( new Error('haha'));
});

app.use(function(req,res,next){
    console.log('2');
    res.status(200).end();
});

// 错误处理
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500).send('something broke!');
});

app.listen(3000);