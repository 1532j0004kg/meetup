var express = require("express");
var mongoose = require("mongoose");

var router = express.Router();

var postSchema = mongoose.Schema({
  companyname : String,
  meetingplace : String,
  meetingabout : String
});

var postModel = mongoose.model("data" , postSchema);


router.post('/postdata' , function(req , res){
sess = req.session

  if(sess.username)
  {
    var newData = new postModel();
    newData.companyname = req.body.companyname;
    newData.meetingplace = req.body.meetingplace;
    newData.meetingabout = req.body.meetingabout;
    newData.save(function(err , savedObject){
      res.send(savedObject);
      });

}
else{
   res.send(err);
}
});

router.get('/fetchdata' , function(req , res){

    postModel.find({} , function(err , foundObject){
   if(err){
     res.send(err);
   }
      res.send(foundObject);

      });


});

router.get("/logout" , function(req,res){
  req.session.destroy(function(err){
    if(err)
    {
          res.send(err);
    }
    else {
      res.redirect('/loginpage.html');

    }
  });
});

module.exports = router ;
