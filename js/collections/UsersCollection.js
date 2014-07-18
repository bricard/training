define([
  'jquery',
  'underscore',
  'backbone',
  '../models/UserModel'
], function($, _, Backbone, UserModel){

    var UsersCollection = Backbone.Collection.extend({
      model: UserModel,
      url: '/users'

      // initialize: function(){}

    });

  return UsersCollection;
});
