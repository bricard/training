define([
  'jquery',
  'underscore',
  'backbone',
  '../collections/UsersCollection',
  // The Require.js 'text.js' plugin is automatically loaded if the text! prefix is used for a dependency!
  // With it we load raw text which is used as our view primary template
  'text!../../templates/userListTemplate.html'
],function($, _, Backbone, UsersCollection, userListTemplate){

  // Ajax prefilters are useful for hooking into all AJAX request.
  // In this case, we want to send all our AJAX request off to a remote server instead of the same domain.
  // So we use a prefilter to hook in before the request is sent and prepend our custom origin server.
  $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
    // Thomas Davis deployed CORS enabled version of the video-backbone-beginner-server at:
    // options.url = 'http://backbonejs-beginner.herokuapp.com' + options.url;
    // My edited version is at:
    // options.url = 'http://evening-temple-8040.herokuapp.com' + options.url;
    options.url = 'http://usermanager-2.herokuapp.com' + options.url;

  });

    var UserListView = Backbone.View.extend({
        el: '.page',

        render: function () {

          var that = this;
          // var users = new Users();
          var users = new UsersCollection();
          users.fetch({
            success: function (users) {
              // Using Underscore we compile our template with data
              var compiledTemplate = _.template(userListTemplate, {users: users.models});
              // OR
              /*var data = {users: users.models, _: _ };
              var compiledTemplate = _.template(userListTemplate, data);*/

              // Append our compiled template to our view
              that.$el.html(compiledTemplate);
            }
          })
        }

    });

    return UserListView;
});
