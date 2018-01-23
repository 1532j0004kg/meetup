var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var session = require("express-session");
var sess;

var loginSchema = mongoose.Schema({
  username : String,
  password : String
});

var loginModel = mongoose.model('users' , loginSchema);

router.post('/login' ,function(req,res){
  sess = req.session;
  sess.username = req.body.username;

  var newUser = new loginModel();
  newUser.username = req.body.username;
  newUser.password = req.body.password;
  newUser.save(function(err,savedObject){
   if(err)
   {
    res.statusCode(500).send();
   }
   else {
      res.send(savedObject);
  }
  });
});

module.exports = router;
