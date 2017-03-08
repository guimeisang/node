/**
 * Created by guimei on 2017-03-08 .
 */
var fs = require('fs');
var path = require('path');
var sha1 = require('sha1');
var express = require('express');
var router = express.Router();

var UserModel = require('../models/users');
var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signup 注册页
router.get('/',checkNotLogin,function(req,res,next){
    res.render('signup');
});

// POST /signup 用户注册
router.post('/',checkNotLogin,function(req,res,next){
    var name = req.fields.name;
    var gender = req.fields.gender;
    var bio = req.fields.bio;
    var avatar = req.fields.avatar.path.split(path.sep).pop();
    var password = req.fields.password;
    var repassword = req.fields.repassword;

    // 校验参数
    try{
        if(!(name.length>=1&&name.length<=10)){
            throw new Error('名字请限制在1-10个字符');
        }
        if(['m','f','x'].indexOf(gender)===-1){
            throw new Error('性别只能是m,f,x');
        }
        if(!(bio.length>=1&&bio.length<=30)){
            throw new Error('个人简历请限制在1-30个字符');
        }
        if(!req.files.avatar.name){
            throw new Error('缺少头像');
        }
        if(password.length<6){
            throw new Error('密码至少6个字符');
        }
        if(password !==repassword){
            throw new Error('两次输入的密码不一致');
        }
    }catch (e){
        // 注册失败，异步删除上传的头像
        fs.unlink(req.files.avatar.path);
        req.flash('error',e.message);
    }

    // 明文密码加密
    password = sha1(password);

    // 待写入数据库的用户信息
    var user = {
        name:name,
        password:password,
        gender:gender,
        bio:bio,
        avatar:avatar
    };

    // 用户信息写入数据库
    UserModel.create(user)
        .then(function(result){
            // 此 user 是插入mongodb 后的值，包含 _id

        })


});

module.exports = router;