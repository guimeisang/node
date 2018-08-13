const create_db = require('./create_db');
const create_table = require('./create_table');
const mysql_connect = require('./mysql_connect');

const helpers = {
    create_db: create_db,
    mysql_connect: mysql_connect,
    create_table: create_table,
};

module.exports = helpers;