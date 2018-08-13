var mysql = require('mysql');
var mysqlCommand = require('./config/mysqlCommand');
var connection = mysql.createConnection({
    host: '0.0.0.0',
    user: 'zhangguimei',
    port: '3306',
    password: 'zgm123456',
    database: 'GM'
})

connection.connect((err)=>{
    if(err) throw err;
    console.log('mysql connnected!')
});
console.log(mysqlCommand.delect);
connection.query(mysqlCommand.delect, (error, results, fields) =>{
    if(error){
        console.log(error);
        return;
    }
    console.log('results: ', results);
})