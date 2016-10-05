/**
 *	Try to keep the view as stupid as possible
 * 	Most data logic needs to be in the IndexController
 */

Template.index.helpers({
	title: "Index",
	myHelper: function () {
    	var controller = Iron.controller();
    	// now we can get properties and call methods on the controller

    	return "Hi! " + controller.giveMeData();
  	}
})