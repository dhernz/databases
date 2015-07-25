var model = require('../models/index.js');


module.exports = {
  Messages: {
    get: function (req, res) {
      console.log("MESSAGES GET");
      // return messages from server
    }, // a function which handles a get request for all messages
    post: function (req, res){
      var getID = "SELECT id from Users WHERE Name = '" + req.body.username + "';";
      // query to get user id
      model.runQuery(getID, function(results){
        var userID = results[results.length-1].id;
        var postMessage = "INSERT INTO Messages (id_Users, Message) VALUES ('" + userID + "', '" + req.body.message + "');";
        model.messages.post(postMessage, function(){
          res.writeHead(200);
          res.end();
        })
      });
        // query submit message
    } // a function which handles posting a message to the database
  },

  Users: {
    // Ditto as above
    get: function (req, res) {

    },

    post: function (req, res) { 
      var query = "INSERT INTO Users (Name) VALUES ('" + req.body.username + "');";
      model.users.post(query, function(){
        res.writeHead(200);
        res.end();
      });

    }
  },

  Rooms: {  
    get: function (req, res) {
      console.log("ROOMS GET");

    },
    post: function (req, res) {
      console.log("ROOMS POST");

    }
  }
};

