var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cache = require('memory-cache');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

cache.put('foo', 'bar')

// 设定100ms之后清除缓存
cache.put('guimeisang', 'play', 100, (key, value)=>{
  console.log('1'+key+'did'+value);
})

console.log('guimeisang will ' + cache.get('guimeisang'));

setTimeout(()=>{
  console.log('guimeisang now ' + cache.get('guimeisang'));
}, 200)

// create new cache instance 
var newCache = new cache.Cache();

newCache.put('foo', 'newbaz');

setTimeout(function() {
  console.log('1. foo in old cache is ' + cache.get('foo'));
  console.log('2. foo in old cache is ' + cache.get('foo'));
  console.log('foo in new cache is ' + newCache.get('foo'));
}, 200);

app.use((req, res, next)=>{
  console.log('0');
  next();
})

app.use((req, res, next)=>{
  console.log('1');
  next();
})

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
