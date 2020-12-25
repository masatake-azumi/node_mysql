//モジュール読み込み
const mysql = require('mysql');
const config = require('config');

const con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
});

con.connect((err) => {
    if (err) throw err;
    console.log('connect success!');
});

const sql = 'CREATE DATABASE ' + config.mysql.database;
con.query(sql, (err) => {
    if (err) throw err;
    console.log('created database!');
});

con.end();