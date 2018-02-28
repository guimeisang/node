/**
 * Created by guimei on 2017-03-06 .
 */
var express = require('express');
var router = express.Router();

router.get('/:name',function(req,res){
    res.render('users',{
        name:req.params.name
    });
});

module.exports = router;