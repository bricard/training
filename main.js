// 1. Loading libs located in the folder as require-min.js and main.js
// require('newrelic');

requirejs.config({
  paths: {
  	"jquery": "jquery",
	"underscore": "underscore",
	"backbone": "backbone"
	// "templates": '/templates/'

 	// "jquery": "jquery-min",
	// "underscore": "underscore-min",
	// "backbone": "backbone-min"

	// LOADING from CDN gives erratic results !!!!!
	// DO NOT TRY except for loading jquery from a CDN / See Paragrah 5 in: http://requirejs.org/docs/jquery.html
/*	"jquery": "http://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min",
	"underscore": "http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min",
	"backbone": "http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min"*/

  }
});


// 2. OR Loading libs located in different folder by setting a different baseUrl for those files
/*requirejs.config({
	baseUrl: "js/lib",
	paths: {
		"newrelic":"newrelic",
		"jquery": "jquery",
		"underscore": "underscore",
		"backbone": "backbone"
	}
});*/

// Load our app module and pass it to our definition function
requirejs(['app'], function(App) {
	// The "app" dependency is passed in as "App"
	console.log("Initializing App");
  	App.initialize();
});
