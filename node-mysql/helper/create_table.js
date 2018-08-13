function create_table(connection, tableName){
    const sql = `CREATE DATABASE ${tableName}`;
    connection.query(sql, (error, results, fields) =>{
        if (error) throw error;
        console.log(tableName, "Database created");
    })
}

module.exports = create_table;