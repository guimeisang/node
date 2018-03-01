var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/userdb');

var userSchema = new mongoose.Schema({
    username: String,
    email: String
})

var model = mongoose.model('user', userSchema);
// console.log(model);
module.exports = model;