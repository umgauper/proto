var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

var app = express();
var bodyParser = require('body-parser');

// Connect to the db
//MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
//    if(!err) {
//        console.log("We are connected");
//    }
//});
//// Database
//var mongoclient = new MongoClient(new Server("localhost", 27017));
//
//var db = mongoclient.db('nodetest2');
//
app.get('/', function(req, res) {
        res.end("Hello, world!");
});

module.exports = app;