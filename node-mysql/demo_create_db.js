var mysql = require('mysql');
const helpers = require('./helper/index');
const conf = require('./config/conf');

var connection = mysql.createConnection(conf);

helpers.mysql_connect(connection);
helpers.create_db(connection, 'test');