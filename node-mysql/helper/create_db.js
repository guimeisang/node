function create_db(connection, dbname){
    const sql = `CREATE DATABASE ${dbname}`;
    connection.query(sql, (error, results, fields) =>{
        if (error) throw error;
        console.log(dbname, "Database created");
    })
}

module.exports = create_db;