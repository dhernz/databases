var db = require('../db');




module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (messageObj, callback) {

    //   console.log("Getting in model post:", messageObj.message);
    //   var getId = "SELECT id FROM Users WHERE Name = '" + messageObj.username + "';"; 
    //   db.conn.query(getId, function(error,results){
    //     if(error){
    //       throw error;
    //     } else {
    //         secondQuery(results,messageObj,callback);
    //     }
    //   })
     } // a function which can be used to insert a message into the database
  },

  users: {
    get: function () {},
    post: function (query, callback) {
      console.log('I AM THE QUERY',query);
    //   var addUser = "INSERT INTO Users (Name) VALUES ('" + val + "');";
    //   db.conn.query(addUser, function (error, results){
    //     if(error){
    //       throw error;
    //     } else {
    //       callback();
    //     }
    //   });
    // }
      module.exports.runQuery(query,callback);
    }
  },

  runQuery: function(qstring, callback){
    db.conn.query(qstring, function(error,results){
      if(error){
        throw error;
      } else {
        callback();
      }
    })
  }
};


         // var secondQuery = function(results,messageObj  ) {
         //  var userID = results[results.length-1].id;
         //  console.log(userID);
         //  //var id = results[results.length-1].id;
         //  //console.log('This is the person sending the message: ', id);
         //  var addMessage =  "INSERT INTO Messages (id_Users,Message) VALUES ('"+ userID +"', '"+ messageObj.message +"');";
          
         //  db.conn.query(addMessage, function(error,callback){
         //    if(error){
         //      throw error;
         //    } else {
         //      this.callback();
         //    }
         //  })

        // }