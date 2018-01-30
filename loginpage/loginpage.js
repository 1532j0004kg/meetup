$(document).ready(function(){


$("#signin").click(function(){
var passWord = $("#password").val();
var userName = $("#username").val();
if((userName != "") && (passWord != ""))
{
  $.ajax({

    type : "post",
    url : 'http://localhost:8000/login',
    data : JSON.stringify({
      username :  userName,
      password : passWord
    }),
    contentType : "application/json",
    dataType : 'json',
    success : function name(){

      window.location.href = "/post.html";
    }
  });
}
});
});
