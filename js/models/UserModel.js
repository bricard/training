define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

  var UserModel = Backbone.Model.extend({
    urlRoot: '/users'
  });

  return UserModel;
});
