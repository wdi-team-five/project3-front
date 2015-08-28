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

  var prependDocumentForm = function (data) {
    var documentPrependTemplate = Handlebars.compile($('#document-prepend-template').html());
    $('#display-document-index').prepend(documentPrependTemplate(data));
  }

  // var hideButton = function(data) {
  //   if (data) {
  //   $('#show-login-modal').addClass('hide');
  //   $('#show-register-modal').addClass('hide');
  //   $('#logout-button').removeClass('hide');
  //   }
  // };

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

  // hideButton();
  showProfileRequest();
  showFileRequest();

}); // end document.ready

$(".tag-cloud").on('click', 'h4 > a', function(event){
  event.preventDefault();
  showElementsByTagRequest($(this).id);
});

// tag make row handlebars helper
Handlebars.registerHelper('grouped_each', function(every, context, options) {
  var out = "", subcontext = [], i;
  if (context && context.length > 0) {
    for (i = 0; i < context.length; i++) {
      if (i > 0 && i % every === 0) {
        out += options.fn(subcontext);
        subcontext = [];
      }
      subcontext.push(context[i]);
    }
    out += options.fn(subcontext);
  }
  return out;
});

