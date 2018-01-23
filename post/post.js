$(document).ready(function(){



$("#Submit").click(function(){
  $.ajax({
    type : "post",
    url : 'http://localhost:8000/postdata',
    data : JSON.stringify({
      companyname :  $("#companyname").val(),
      meetingplace :  $("#meetingplace").val(),
      meetingabout : $("#meetingabout").val()
    }),
    contentType : "application/json",
    dataType : 'json',
    success : function(data,err){

    if(err)
    {
      console.log(err);
    }

       $("#c").append("<i>"+data.companyname+"<br><i>");
       $("#mp").append("<i>"+data.meetingplace+"<br><i>");
       $("#ma").append("<i>"+data.meetingabout+"<br></i>");

   }

    });
  });
});
