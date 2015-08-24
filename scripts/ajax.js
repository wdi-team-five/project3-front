'use strict';
var sa = 'http://localhost:8000';


var registerRequest = function (){
  var formData = {
    email: $('#register-email').val(),
    password: $('#register-password').val(),
    firstName: $('#register-firstName').val(),
    lastName: $('#register-lastName').val(),
    company: $('#register-company').val()
  };
  $.ajax({
    url: sa + '/register', // formerly signup
    type: 'POST',
    contentType: 'application/json',
    processData: false,
    data: formData
  })
  .done(function(data) {
    // $('#result').html(JSON.stringify(data, null, 2));
    $("#login-modal").modal();
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
    // update later
  });

};
