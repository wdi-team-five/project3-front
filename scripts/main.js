var showProfileForm = function (data) {
    console.log("Show Profile Form data is ", data);
    var profileShowTemplate = Handlebars.compile($('#profile-show-template').html());
    $('#display-profile-information').html(profileShowTemplate(data));
  };

  var indexTagCloud = function (data) {
    var tagIndexTemplate = Handlebars.compile($('#tag-index-template').html());
    $('#display-tag-index').html(tagIndexTemplate(data));
  };

  var indexDocumentForm = function (data) {
    console.log("IndexDocForm data we are being sent is ", data);
    var documentIndexTemplate = Handlebars.compile($('#document-index-template').html());
    // $('#display-document-index').html("<p>hello world</p>");
    console.log("Doc index temp(data) is ",documentIndexTemplate(data));
    $('#display-document-index').html(documentIndexTemplate(data));
    // console.log("This is the second template", $('#document-index-template').html());
  };


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



