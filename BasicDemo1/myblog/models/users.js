/**
 * Created by guimei on 2017-03-08 .
 */
var User = require('../lib/mongo').User;

module.exports = {
    // 注册一个用户
    create:function create(User){
        return User.create(User).exec();
    }
};