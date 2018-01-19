var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var usersModel = require('./models/login.js');

mongoose.connect('mongodb://localhost/meetup');
mongoose.Promise = global.Promise;

var app = express();
app.use(express.static('loginpage'));
app.use(bodyParser.json());
app.use(usersModel);

app.listen('8000',function(){
  console.log("server is listening on port 8000");
});
