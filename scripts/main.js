$(document).ready(function(){

    $("#show-register-modal").click(function(){
        $("#register-modal").modal();
    });

    $("#show-login-modal").click(function(){
        $("#login-modal").modal();
    });

    $('#register-button').on('click', function(){
      registerUserRequest();
    });

    $('#login-button').on('click', function(){
      loginUserRequest();
    });

    $('#profile-page').on('click', function(){
      showProfileRequest();
    });


  var showProfileForm = function (data) {
    var profileShowTemplate = Handlebars.compile($('#profile-show-template').html());
    $("#display-profile-information").html(profileShowTemplate(data));
  };

  var indexTagCloud = function (data) {
    var tagIndexTemplate = Handlebars.compile($('#tag-index-template').html());
    $('#display-tag-index').html(tagIndexTemplate(data));
  };

  $(".tag-cloud").on('click', 'h4 > a', function(event){
    showFilesByTagRequest($(this).id);
  });

}); // end document.ready
