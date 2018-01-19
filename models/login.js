var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
  username : String,
  password : String
});

var usersModel = mongoose.model('users' , usersSchema);

router.post('/login' ,function(req,res){


  var newUser = new usersModel();
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
