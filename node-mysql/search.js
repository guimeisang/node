/**
 * 还是没有跑通啊...
 */ 
var mysql = require('mysql');
var helpers = require('./helper/index');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'zhangguimei',
    port: '3306',
    password: 'zgm123456',
    database: 'test'
})

helpers.mysql_connect(connection);
// helpers.create_table(connection, websites);

var sql = 'SELECT * FROM websites';

connection.query(sql, (err, result)=>{
    if(err){
        console.log('[search failure]', err.message);
        return;
    }
    console.log('result', result)
})