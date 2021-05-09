/**
* PHP Email Form Validation - v2.0
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
// !(function($) {
//   "use strict";

// })(jQuery);


var contactForm =  $("#contact-form");
var contactAler= $("#submission-alert");
var submitButton = $("#submit-button")
contactForm.on("submit",function(event){
  event.preventDefault();
  var checkData = myValidation();
  if(checkData){
     $.ajax({
      url:"https://script.google.com/macros/s/AKfycbyGyo-Bevf1y0fmtS_FHgtiGMS5pq5crAtq64pmsnNVkj5Ek4ZKFraGhhDLy5wbwLDJmQ/exec",
      method: "POST",
      data: contactForm.serialize(),
      success: function (response) {
        submitButton.removeClass("error").html("Success").addClass("success"),
        contactAler.removeClass("red-text").addClass("green-text").html("Thank you for your message. It has been sent.").fadeIn(200),
      setTimeout((function() {
        submitButton.html("Send Message").removeClass("success").prop("disabled", !1),
        contactAler.fadeOut(200).removeClass("success").html("")
      }
      ), 6e3),
       
         setTimeout(function(){ window.location.reload() }, 3000);
         
      //     // //window.location.href="https://google.com"
     
      
      },
      error: function (err) {
          
        submitButton.removeClass("success").addClass("error").html("Error"),
        contactAler.addClass("red-text").html("Server error! Please check your browser console log for more details.").fadeIn(200),
          setTimeout((function() {
            submitButton.html("Send Message").removeClass("success").prop("disabled", !1),
            contactAler.fadeOut(200).removeClass("success").html("")
          }
          ), 6e3)
           setTimeout(function(){ window.location.reload() }, 3000);
      
           
      }
  })
  }else{
    submitButton.addClass("error").html("Send Again");
    contactAler.addClass("red-text").html("Incorrect Your Form Details!");
  }

})




const validated ={
  name:false,
  email:false,
  sub:false,
  message:false
}

function nameChek(){
  var nameAlert = document.getElementById('name-alert');
  var name = document.getElementById("contact-name").value;
  var expression = /^[a-zA-Z\s]*$/;

  if(name == ""){
      validated.name= false;
      nameAlert.innerHTML="*Required"

  }else if(name.match(expression)){
      nameAlert.innerHTML="";
      validated.name= true;
  }else{
      nameAlert.innerHTML =" Enter Charecters only"
      validated.name=false
  }
 
  }

  function chekEmail(){
      var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      var emailCheck = document.getElementById('contact-email').value;
      var emailAlert = document.getElementById('email-alert');
      if(emailCheck == ""){
          validated.email= false;
          emailAlert.innerHTML ="*Required"
      }else if(emailCheck.match(pattern)){
          emailAlert.innerHTML="";
          validated.email= true;
      }else{
          emailAlert.innerHTML ="Invalid E-mail"
          validated.email=false
      }
  }

  function subjectCheck(){
      var sub= document.getElementById("contact-subject").value;
      var subAlert  = document.getElementById("sub-alert");
      if(sub.length < 5){
          validated.sub=false;
          subAlert.innerHTML="Enter Your Full Subject";
      }else{
          validated.sub=true;
          subAlert.innerHTML=" ";
      }
  }

  function messageCheck(){
      var msg = document.getElementById("contact-message").value;
      var msgAlert = document.getElementById("msg-alert");
      if(msg.length < 20 ){
          validated.message=false;
          msgAlert.innerHTML= "Please Enter minimum 50 words";
      }else{
          validated.message=true;
          msgAlert.innerHTML=" ";
      }
  }

  function myValidation(){

      if(validated.name && validated.email && validated.message && validated.sub){
          return true;
      }else{
          return false;
      }
  }