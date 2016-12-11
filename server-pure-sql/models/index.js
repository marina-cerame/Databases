var db = require('../db');

module.exports = {
  messages: {
    get: function (cb, qString) {
      db.query('SELECT * FROM messages', (err, rows) => {
        cb(err, rows);
      });
    },
    post: function (body, room, user, cb) {
      db.query(`INSERT INTO messages (body, room, user) VALUES ('${body}', '${room}', '${user}')`, (error, results) => {

        cb(error, results);
      });
    }

  },

  users: {
    // Ditto as above.

    get: function (cb) {
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
