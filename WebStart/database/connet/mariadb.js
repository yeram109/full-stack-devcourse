const mariadb = require('mysql');

const conn = mariadb.createConnection(
    {
        host: 'localhost',
        port: 3306, 
        user: 'root',
        password: 'root',
        database: 'Tenis'
    }
);

module.exports = conn;