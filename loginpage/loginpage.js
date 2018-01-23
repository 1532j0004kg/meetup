$(document).ready(function(){


$("#register").click(function(){
  $.ajax({
    type : "post",
    url : 'http://localhost:8000/login',
    data : JSON.stringify({
      username :  $("#username").val(),
      password : $("#password").val()
    }),
    contentType : "application/json",
    dataType : 'json',
    success : function(data,err){

      window.location.href = "/post.html";

    if(err)
       console.log(err);


   }

    });
  });
});
