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
    // NEED BACK: email
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
    // NEED BACK: ??
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
    // NEED BACK: ??
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
    // NEED BACK: username, profile info, elementList
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
    // NEED BACK: elements list according to tag
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
    // NEED BACK: get list files within elementId (directory)
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
    // NEED BACK: ??
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
    // NEED BACK: nothing, but we're gonna call index of elements
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
    // NEED BACK: nothing, but we're gonna call index of elements
    // back to the homepage, keeping the session alive
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

var deleteTagRequest = function (tagId){
  $.ajax({
    url: sa + '/tags/' + tagId, // CLARIFY IT
    type: 'DELETE',
    contentType: 'application/json',
    processData: false
  })
  .done(function(data){
    // NEED BACK: nothing, but we're gonna call index of tags
    indexTagCloud(data);
    // back to the homepage, keeping the session alive
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

var createTagRequest = function (){
  var tagData = {
    name: $('#').val();
  };
  $.ajax({
    url: sa + '/tags', // CLARIFY IT
    type: 'POST',
    contentType: 'application/json',
    processData: false,
    data: JSON.stringify(tagData)
  })
  .done(function(data){
    // NEED BACK: nothing, but we're gonna call index of tags
    indexTagCloud(data);
    // back to the homepage, keeping the session alive
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

var updateTagRequest = function (tagId){
  var tagData = {
    name: $('#').val();
  };
  $.ajax({
    url: sa + '/tags/' + tagId, // CLARIFY IT
    type: 'PUT',
    contentType: 'application/json',
    processData: false,
    data: JSON.stringify(tagData)
  })
  .done(function(data){
    // NEED BACK: nothing, but we're gonna call index of tags
    indexTagCloud(data);
    // back to the homepage, keeping the session alive
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

var logoutUserRequest = function (){
  $.ajax({
    url: sa + '/logout', // CLARIFY IT
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
    directory: true,
    path: "cara@cara.com"
  },
  {
    name: "my secret file 2",
    directory: false,
    path: "cara@cara.com"
  },
  {
    name: "my secret file 2",
    directory: false,
    path: "cara@cara.com,private"
  }
];
