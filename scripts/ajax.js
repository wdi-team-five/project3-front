'use strict';
var username;
var sa = 'http://localhost:8000';


var registerUserRequest = function (){
  var registerData = {
    username: $('#register-email').val(),
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
    data: JSON.stringify(registerData)
  })
  .done(function(data) {
    // $('#result').html(JSON.stringify(data, null, 2));
    $('#register-modal').hide();
    $("#login-modal").modal();
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
    // update later
  });
};

var loginUserRequest = function (){
  var loginData = {
    username: $('#login-email').val(),
    password: $('#login-password').val()
  };
  $.ajax({
    url: sa + '/login',
    type: 'POST',
    contentType: 'application/json',
    processData: false,
    data: JSON.stringify(loginData)
  })
  .done(function(data){
    $("#login-modal").hide();
    // back to the homepage, keeping the session alive
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

var updateUserRequest = function(){
  var updateData = {
    username: $('#update-email').val(),
    password: $('#update-password').val(),
    firstName: $('#update-firstName').val(),
    lastName: $('#update-lastName').val(),
    company: $('#update-company').val()
  };
  $.ajax({
    url: sa + '/users/', // CLARIFY IT
    type: 'PUT',
    contentType: 'application/json',
    processData: false,
    data: JSON.stringify(updateData)
  })
  .done(function(data){
    // back to the homepage, keeping the session alive
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

var changePasswordRequest = function(){
  var passwordData = {
    username: $('#update-email').val(),
    oldPassword: $('#update-oldPassword').val(),
    newPassword: $('#update-newPassword').val()
  }
  $.ajax({
    url: sa + '/users/', // CLARIFY IT
    type: 'POST',
    contentType: 'application/json',
    processData: false,
    data: JSON.stringify(passwordData)
  })
  .done(function(data){
    // back to the homepage, keeping the session alive
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

var deleteUserRequest = function (){

};

var showProfileRequest = function (){
  $.ajax({
    url: sa + '/profile',
    type: 'GET',
    contentType: 'application/json',
    processData: false
  })
  .done(function(data){
    username = data.profileData.username;
    showProfileForm(testProfileData); // CHANGE TO DATA
    indexTagCloud(testTagData); // CHANGE TO DATA
    // back to the homepage, keeping the session alive
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

var showElementsByTagRequest = function (tagId){
  $.ajax({
    url: sa + '/tag/' + tagId, // CLARIFY IT
    type: 'GET',
    contentType: 'application/json',
    processData: false
  })
  .done(function(data){
    indexDocumentForm(data.files);
    // back to the homepage, keeping the session alive
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

var showElementsRequest = function (elementId){
  $.ajax({
    url: sa + '/elements/' + elementId, // CLARIFY IT
    type: 'GET',
    contentType: 'application/json',
    processData: false
  })
  .done(function(data){
    indexDocumentForm(data.files);
    // back to the homepage, keeping the session alive
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

var deleteElementRequest = function (elementId){
  $.ajax({
    url: sa + '/elements/' + elementId, // CLARIFY IT
    type: 'DELETE',
    contentType: 'application/json',
    processData: false
  })
  .done(function(data){
    indexDocumentForm(data.files);
    // back to the homepage, keeping the session alive
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

var updateElementRequest = function (elementId){
  $.ajax({
    url: sa + '/elements/' + elementId, // CLARIFY IT
    type: 'PUT',
    contentType: 'application/json',
    processData: false
  })
  .done(function(data){

    // back to the homepage, keeping the session alive
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

var uploadElementRequest = function (???){
  $.ajax({
    url: sa + '/element/' + elementId, // CLARIFY IT
    type: 'POST',
    contentType: 'application/json',
    processData: false
  })
  .done(function(data){

    // back to the homepage, keeping the session alive
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};



// logoutUserRequest
// , , ,
// TAGS CRUD
//
// PROFILE U

// stretch: showFileRequest

// var testProfileData = {
//   username: "data.profileData.username",
//   firstName: "data.profileData.firstName",
//   lastName: "data.profileData.lastName",
//   company: "data.profileData.company"
// };


var testProfileData = {
  username: "cara@cara.com",
  firstName: "Cara",
  lastName: "Clarke",
  company: "Google Inc."
};

// var testTagData = {
//   tagId: "data.tagData.tagId",
//   name: "data.tagData.tagName"
// };

var testTagData = [{
  tagId: "34",
  name: "work"
}, {
  tagId: "35",
  name: "hobby"
}, {
  tagId: "36",
  name: "my little pony"
}];

var testElementData = [
  // tagName: "data.fileData.tagName",
  {
    name: "my secret file 1",
    directory: true
  },
  {
    name: "my secret file 2",
    directory: false
  },
  {
    name: "my secret file 2",
    directory: false
  }
];
