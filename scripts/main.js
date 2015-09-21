var showProfileForm = function (data) {
	var profileShowTemplate = Handlebars.compile($('#profile-show-template').html());
	$('#display-profile-information').html(profileShowTemplate(data));
};

var indexTagCloud = function (data) {
	var tagIndexTemplate = Handlebars.compile($('#tag-index-template').html());
	$('#display-tag-index').html(tagIndexTemplate(data));
	$(".tag-cloud").on('click', function(event){
		showElementsByTagRequest($(this).html().toString());
	});
};

var prependTagCloud = function (data) {
	var prependTagTemplate = Handlebars.compile($('#tag-prepend-template').html());
	$('#display-tag-index').prepend(prependTagTemplate(data));
	$(".tag-cloud").on('click', function(event){
		showElementsByTagRequest($(this).html().toString());
	});
};

var indexFileStructure = function(data) {
	var fileStructureShowTemplate = Handlebars.compile($('#file-structure-show-template').html());
	data.firstName = data.firstName[0].toLowerCase();
	data.lastName = data.lastName.toLowerCase();
	// + data.lastName.toLowerCase() + data.id;
	$('#display-folder-index').html(
		("<span>" + fileStructureShowTemplate(data) + "</span>"));

		// var newHTML = $('#display-folder-index').html();
		// newHTML = newHTML + "<button type='button' class='btn btn-info btn-xs addFolder hide aside'>Add Folder</button>";
		// $('#display-folder-index').html(newHTML);
	};

	var indexDocumentForm = function (data) {
		var documentIndexTemplate = Handlebars.compile($('#document-index-template').html());
		$('#display-document-index').html(documentIndexTemplate(data));
		$('.documentLink').on('mouseover', function() {
			$('.deleteButtons').removeClass('hide');
		});
		$('.documentLink').on('mouseout', function() {
			$('.deleteButtons').addClass('hide');
		});
		$('.deleteButtons').on('click',function(event){
			deleteElementRequest($(this).attr('id'));//needs to be mongoID);
			showFileRequest();
			showTagsRequest();
		});
	};

	var appendNewFolder = function(newFolder){
		console.log("append New folder got called. newFolder is ", newFolder);
		$("#folderPathId").append(newFolder);
	};

	var pushFolderToParent = function(newFolder){
		// find parent.

		// set found parent = parentFolder
		var parentFolder = {};

		// add newFolder to parent []
		parentFolder.children.push(newFolder);
	};

	var prependDocumentForm = function (data) {
		var documentPrependTemplate = Handlebars.compile($('#document-prepend-template').html());
		$('#display-document-index').prepend(documentPrependTemplate(data));
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

		// hideButton();
		showProfileRequest();
		showFileRequest();
		showTagsRequest();

	}); // end document.ready

	
	// tag make row handlebars helper
	// Handlebars.registerHelper('grouped_each', function(every, context, options) {
	//   var out = "", subcontext = [], i;
	//   if (context && context.length > 0) {
	//     for (i = 0; i < context.length; i++) {
	//       if (i > 0 && i % every === 0) {
	//         out += options.fn(subcontext);
	//         subcontext = [];
	//       }
	//       subcontext.push(context[i]);
	//     }
	//     out += options.fn(subcontext);
	//   }
	//   return out;
	// });
