// Array listing all the module app.js dependencies to be loaded before function is executed
// The function should return an object that defines the module.
define([
  'jquery',
  'underscore',
  'backbone',
  'AppRouter'
], function($, _, Backbone, AppRouter){

  var initialize = function(){
    console.log("app initialized / CHECK!!!");
    // Pass in our Router module and call it's initialize function
    console.log("Initializing AppRouter / CHECK!!!");
    AppRouter.initialize();
    // var app_router = new AppRouter();
    // Backbone.history.start();

  };

  return {
    initialize: initialize
  };
});
