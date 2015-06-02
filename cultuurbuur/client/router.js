/**
 *	App Router
 *	Apps router is based on the Iron:Router plugin for Meteor
 *
 *	Iron router looks at router options in this order:
 *	1. Route, 2. RouteController, 3. Router
 */

// Configuration
Router.configure({
	// Default Layout for the application
  	layoutTemplate: 'layout',
  	// Default Controller for the application
  	controller: 'ApplicationController'
});

// Index route
Router.route('/', {
	name: 'index.show',
	controller: 'IndexController'
});

// About route
Router.route('/about/:_id', function(){
	this.render("about", {
		data: function() {
			console.log(this.params);
			return this.params;
		}
	});
},{
	name: 'about.show'
});

// Redirected route
Router.route('/about', function(){
	this.redirect('about.show', {_id: 2}, {query: 'q=r', hash: 'aboutRedirect'});
},{
	name: 'redirect.index'
});

// Route options
