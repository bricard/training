define([
  'jquery',
  'underscore',
  'backbone',
  'js/views/UserListView',
  'js/views/UserEditView'
], function($, _, Backbone,  UserListView, UserEditView){

    var userListView = new UserListView();
    var userEditView = new UserEditView();

  // Creates a custom router class
  var AppRouter = Backbone.Router.extend({
    // Definition of routes and their pair actions
    routes: {
          "": "home", // #home
          "edit/:id": "edit", //#edit/id
          "new": "edit", // #new
    },

    home: function(){
      console.log('Rendering userListView');
      userListView.render();
    },
    edit: function(id){
      console.log('Rendering userEditView');
      userEditView.render({id: id});
    }

  });


  // var initialize = function(app_router){
  //   var app_router = new AppRouter();
  //   console.log("app_router created!");

/*    var userListView = new UserListView();
    var userEditView = new UserEditView();*/

   /* app_router.on('route:home', function(){
      console.log('Rendering userListView');
      // Call render on the module we loaded in via the dependency array
      // userListView.render();
    });
    app_router.on('route:edit', function(id) {
      console.log('Rendering userEditView');
      // Call render on the module we loaded in via the dependency array
      userEditView.render({id: id});
    })*/
    // Route the initial URL
    // Backbone.history.start();
    // Backbone.history.start({pushState: true, hashChange: false});
    // console.log("Backbone History started: " + Backbone.History.started);
  // };

/*  return {
    initialize: initialize
  };*/

  return AppRouter

});
