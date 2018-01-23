$(document).ready(function(){


  $.ajax({
    type : "get",
    url : 'http://localhost:8000/fetchdata',
    contentType : "application/json",
    dataType : 'json',
    success : function(data,err){
      for(var i = 0 ; i < data.length ; i++)
      {
       $("#c").append("<i>"+data[i].companyname+"<br><i>");
       $("#mp").append("<i>"+data[i].meetingplace+"<br><i>");
       $("#ma").append("<i>"+data[i].meetingabout+"<br></i>");
     }
       if(err)
       console.log(err);
   }

    });

});
