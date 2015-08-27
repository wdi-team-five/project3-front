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
