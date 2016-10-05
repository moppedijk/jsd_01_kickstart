/*
	Header js
	Client side javascript code for the header functionalities
*/

// Helpers
Template.header.helpers({
	title: function () {
		var template = Template.instance();
		var templateName = template.view.name;

		return "Template: " + templateName;
	}
});

// Events
Template.header.events({
	"click #logo": function (event, template) {

		// Log event and template information
		console.log("Template view name: " + template.view.name);
		console.log("Event type: " + event.type);
		console.log(template.findAll(".global-nav__item"));

		// Use of route navigation and parameters
		Router.go('about.show', {_id: 1}, {query: 'q=s', hash: 'aboutThis'});
	}
})

// On rendered
Template.header.onRendered(function(){
	console.log("Header rendered!");
})