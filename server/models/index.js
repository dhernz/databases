var db = require('../db');




module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (query, callback) {
      module.exports.runQuery(query, callback);
     } // a function which can be used to insert a message into the database
  },

  users: {
    get: function () {},
    post: function (query, callback) {
      module.exports.runQuery(query,callback);
    }
  },

  runQuery: function(qstring, callback){
    console.log("THIS IS THE POST MESSAGE: ", qstring);
    db.conn.query(qstring, function(error,results){
      if(error){
        throw error;
      } else {
        console.log(results);
        callback(results);
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