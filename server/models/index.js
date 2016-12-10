var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.connect();
      db.query('SELECT * FROM messages', (err, rows, fields) => {
        if (err) { console.log(err); }
        console.log(rows, 'ROWS');
        console.log(fields, 'FIELDS');
      });
    }, // a function which produces all the messages
    post: function (body, room, user, cb) {
      // db.connect();
      db.query(`INSERT INTO messages (body, room, user) VALUES ('${body}', '${room}', '${user}')`, (error, results) => {
        console.log(results, 'THIS IS RESULTS');
        cb(error, results);
      });
    }

  },

  users: {
    // Ditto as above.

    get: function () {
      db.connect();
      db.query('SELECT * FROM users', (err, rows, fields) => {
        if (err) { console.log(err); }
      });
    },
    post: function (username, cb) {
      // db.connect();
      console.log(username);
      db.query(`INSERT INTO users (username) VALUES ('${username}')`, (error, results) => {
        console.log(results, 'THIS IS RESULTS');
        cb(error, results);

      });
      console.log('ENDING CONNECTION HERE');
      // db.end();
    }
  }
};
