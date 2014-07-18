// Loading libs from CDN"jquery": "http://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min",
requirejs.config({
  paths: {
    "jquery": "http://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min",
    "underscore": "http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min",
  	"backbone": "http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min"
  }
});


requirejs(['jquery', 'underscore', 'backbone'], function() {

	/*TEMPLATES*/
	console.log("ALL DEPENDENCIES LOADED");

	/*Users COLLECTION, User MODEL and userListView, UserEditView VIEWS*/

	/*ROUTER and HISTORY*/
	var Router = Backbone.Router.extend({
		routes: {
	      "": "home",
          "edit/:id": "edit",
          "new": "edit",
		}
	});

	var router = new Router;
	router.on('route:home', function(){
		// console.log("ALL DEPENDENCIES LOADED");
		// userListView.render();
	});

	Backbone.history.start();
	// Backbone.history.start({pushState: true});
	console.log("Backbone History started: " + Backbone.History.started);

	// function sayHello(){
	// 	console.log("HELLO");
	// }

	/*UTILITIES*/
    /*function htmlEncode(value){
      return $('<div/>').text(value).html();
    }

    $.fn.serializeObject = function() {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
          if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      return o;
    };

    $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
      options.url = 'http://backbonejs-beginner.herokuapp.com' + options.url;
    });*/


});
