function mysql_connect(connection){
    connection.connect((err)=>{
        if(err){
            throw err;
            return;
        } 
        console.log('mysql connnected!')
    });
}

module.exports = mysql_connect;