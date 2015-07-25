var models = require('../models');
var bluebird = require('bluebird');
var express = require('express');
var bodyParse = require('body-parser');
var mysql = require('mysql');



module.exports = {
  Messages: {
    get: function (req, res) {
      console.log("MESSAGES GET");
      // return messages from server
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("MESSAGES POST");
      //send messages to the server
    } // a function which handles posting a message to the database
  },

  Users: {
    // Ditto as above
    get: function (req, res) {
      // console.log("USERS GET");
      // conn.connect();
      // var getAddUser = 'SELECT * FROM Users;';

      // conn.query(getAddUser, function (error, results){
      //   if(error){
      //     throw error;
      //   } else {
      //     console.log(results);
      //   }
      // });
      // conn.end();
    },

    post: function (req, res) { 

    //   var username = req.body.username;
    //   var addUser = "INSERT INTO Users (Name) VALUES ('" + username + "');";



    //   conn.query(addUser, function (error, results){
    //     if(error){
    //       throw error;
    //     } else {
    //       console.log(results);
    //     }
    //   });
    //   conn.end();
    // }
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

