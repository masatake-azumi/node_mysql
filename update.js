//カスタムモジュール読み込み
const db = require('./lib/db');

//DB接続（カスタムモジュールを利用）
const con = db.connect();

//SELECT
let sql = 'UPDATE users  SET ? WHERE ?;;'
let params = [
    { }
]