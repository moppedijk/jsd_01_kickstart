/**
	Meteor server startup code
	server.js
*/

Meteor.startup(function () {
	// code to run on server at startup
});	

// Server Methods
Meteor.methods({
	indexData: function () {
		return "This is data from the server!";
	}
})

// Publish
Meteor.publish('indexPublishData', function(){
	return "indexPublishData: I hope this will arrive";
})