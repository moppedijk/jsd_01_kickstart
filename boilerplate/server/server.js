/**
	Meteor server startup code
	server.js
*/

Meteor.startup(function () {
	// code to run on server at startup
});

// Publish
Meteor.publish('indexPublishData', function(){
	return "indexPublishData: I hope this will arrive";
})