/**
 * Created by guimei on 2017-03-07 .
 */
module.exports = function(app){
    app.get('/',function(req,res){
        res.redirect('/posts');
    });
    app.use('/signup',require('./signup'));
    app.use('/signin',require('./signin'));
    app.use('/signout',require('./signout'));
    app.use('/posts',require('./posts'));
};