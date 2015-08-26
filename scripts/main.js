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

}); // end document.ready

 var showProfileForm = function (data) {
    var profileShowTemplate = Handlebars.compile($('#profile-show-template').html());
    $('#display-profile-information').html(profileShowTemplate(data));
  };

  var indexTagCloud = function (data) {
    var tagIndexTemplate = Handlebars.compile($('#tag-index-template').html());
    $('#display-tag-index').html(tagIndexTemplate(data));
  };

  var indexDocumentForm = function (data) {
    var documentIndexTemplate = Handlebars.compile($('#document-index-template').html());
    $('#display-document-index').html(documentIndexTemplate(data));
  };

$('#profile-show-button').on('click', function(event){
  event.preventDefault();
  // window.location.href = "profile.html";
  showProfileForm(testProfileData); // CHANGE TO DATA
  indexTagCloud({tags: testTagData});
  indexDocumentForm({documents: testFileData});
});

$(".tag-cloud").on('click', 'h4 > a', function(event){
  event.preventDefault();
  showElementsByTagRequest($(this).id);
});

// upload form function

  $('#upload-form').on('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
  $('#upload').on('click', function (e) {
    var formData = new FormData($('#upload-form')[0]);
    $.ajax({
      url: 'http://localhost:8000/images',
      type: 'POST',
      contentType: false,
      processData: false,
      data: formData
    })
    .done(function(data) {
      $('#result').html(JSON.stringify(data, null, 2));
    })
    .fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });
