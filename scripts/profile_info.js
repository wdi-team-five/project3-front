 $(document).ready(function(){

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
  // showProfileForm(testProfileData); // CHANGE TO DATA
  // indexTagCloud({tags: testTagData});
  // indexDocumentForm({documents: testFileData});
  showProfileRequest();
 });
