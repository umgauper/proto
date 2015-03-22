var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var bodyParser = require('body-parser');
var Server = require('mongodb').Server;

var uri = process.env.MONGOLAB_URI || 'mongodb://cat:tac359@ds053090.mongolab.com:53090/henrietta';

// Connect to the db
MongoClient.connect(uri, function(err, db) {
    if(!err) {
        console.log("We are connected");

        console.log(db.collection('names').findOne());
    }
});

app.get('/', function(req, res) {
        res.end("Hello, world!");
});

module.exports = app;