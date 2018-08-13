var mysqlCommand = {
    add: 'insert into websites values(9, "cvte", "www.cvte.com", 4, "CN"), (10, "enow", "www.enow.com", 5, "CN")',
    delect: 'delect from websites where id = 9',
    update: 'update websites set name = "hahaha" where id = 1',
    search: 'select * from websites',
}
module.exports = mysqlCommand;