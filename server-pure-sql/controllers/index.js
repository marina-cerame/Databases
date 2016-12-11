var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) { console.log(err); }
        res.json(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body, 'thisis req body in post');
      models.messages.post(req.body.message, req.body.roomname, req.body.username, (error, result) => {

        if (error) { console.log('MESSAGE POST ERROR', error); }
        res.sendStatus(201);
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) { console.log(err); }
        res.json(data);
      });
    },

    post: function (req, res) {
      models.users.post(req.body.username, (error, result) => {
        if (error) { console.log('USERS POST ERROR', error); }
        // console.log('INSIDE CONTROLLER');
        res.sendStatus(201);
      });
    }
  }
};
