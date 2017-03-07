/**
 * Created by guimei on 2017-03-06 .
 */
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send('hello,express');
});

module.exports = router;