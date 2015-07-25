var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password:'12345',
  database: 'chat'
});


connection.connect();

exports.conn = connection;


