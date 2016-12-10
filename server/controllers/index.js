var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body.message, req.body.roomname, req.body.username, (error, result) => {

        if (error) { console.log('MESSAGE POST ERROR', error); }
        console.log('INSIDE CONTROLLER');
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req.body.username, (error, result) => {
        if (error) { console.log('USERS POST ERROR', error); }
        console.log('INSIDE CONTROLLER');
        res.sendStatus(201);
      });
    }
  }
};
