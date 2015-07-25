var models = require('../models');
var bluebird = require('bluebird');
var express = require('express');
var bodyParse = require('body-parser');
var mysql = require('mysql');
var model = require('../models/index.js');


module.exports = {
  Messages: {
    get: function (req, res) {
      console.log("MESSAGES GET");
      // return messages from server
    }, // a function which handles a get request for all messages
    post: function (req, res){
      console.log("MESSAGES POST");

      model.messages.post(req.body,function(){
        res.writeHead(200);
        res.end();
      })
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

