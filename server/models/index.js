var db = require('../db');




module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {

    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function () {},
    post: function (val, callback) {
      var addUser = "INSERT INTO Users (Name) VALUES ('" + val + "');";
      db.conn.query(addUser, function (error, results){
        if(error){
          throw error;
        } else {
          callback();
        }
      });
    }
  }
};

