var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      // db.connect();
      db.query('SELECT * FROM messages', (err, rows) => {
        // if (err) { console.log(err); }
        // console.log(rows, 'ROWS');
        cb(err, rows);
        // console.log(fields, 'FIELDS');
      });
    }, // a function which produces all the messages
    post: function (body, room, user, cb) {
      // db.connect();
      db.query(`INSERT INTO messages (body, room, user) VALUES ('${body}', '${room}', '${user}')`, (error, results) => {

        cb(error, results);
      });
    }

  },

  users: {
    // Ditto as above.

    get: function () {
      db.query('SELECT * FROM users', (err, rows) => {
        cb(err, rows);
      });
    },
    post: function (username, cb) {
      db.query(`INSERT INTO users (username) VALUES ('${username}')`, (error, results) => {
        cb(error, results);

      });
    }
  }
};
