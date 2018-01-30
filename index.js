var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var usersModel = require('./models/login.js');
var postModel = require('./models/postdata.js');

mongoose.connect('mongodb://dinesh:ozian111@ds115768.mlab.com:15768/postboy');
//mongoose.Promise = global.Promise;

var app = express();
app.use(express.static('loginpage'));
app.use(express.static('front'));
app.use(express.static('post'));
app.use(session({secret:"secret",resave: true,saveUninitialized: true}));
app.use(bodyParser.json());
app.use(usersModel);
app.use(postModel);

app.listen('8000'||process.env.PORT,function(){
  console.log("server is listening on port 8000");
});
