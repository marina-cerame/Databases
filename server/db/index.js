var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

let connection = mysql.connection({
  user: 'root',
  password: '',
  database: 'chat',
  host: 'localhost:3000'
});

module.exports = connection;
