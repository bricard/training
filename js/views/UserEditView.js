define([
	'jquery',
	'underscore',
	'backbone',
  '../models/UserModel',
	'text!../../templates/editUserTemplate.html'
],function($, _, Backbone, UserModel, editUserTemplate){

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

	var UserEditView = Backbone.View.extend({
		model: UserModel,
		el: '.page',
      events: {
        'submit .edit-user-form': 'saveUser',
        'click .delete': 'deleteUser'
      },
      saveUser: function (ev) {
        var userDetails = $(ev.currentTarget).serializeObject();
        var user = new UserModel();
        user.save(userDetails, {
          success: function (user) {
          	console.log('Saving user');
            // Because no reference to app_router here, using global Backbone object
            // See the link below for other solutions:
            // http://stackoverflow.com/questions/7755344/using-the-backbone-js-router-to-navigate-through-views-modularized-with-require
          	Backbone.history.navigate('', {trigger:true});
          }
        });
        return false;
      },
      deleteUser: function (ev) {
        this.user.destroy({
          success: function () {
            console.log('Deleting user');
            Backbone.history.navigate('', {trigger:true});
          }
        });
        return false;
      },
      render: function (options) {
        var that = this;
		if(options.id) {
			console.log('User id exists: ' + options.id);
			that.user = new UserModel ({id: options.id});
          	that.user.fetch({
	            success: function (user) {
	            	console.log('Rendering existing user');
					var compiledTemplate = _.template(editUserTemplate, {user: user});
					that.$el.html(compiledTemplate);
	            }
          	})
        } else {
        	console.log('Rendering user to create');
			var compiledTemplate = _.template(editUserTemplate, {user: null});
			that.$el.html(compiledTemplate);
        }
      }
    });

    return UserEditView;
});
