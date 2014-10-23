
App.Router.map(function(){
  this.route('user', {path: ':user_id_ollie'});

  this.resource('recipes', function(){
    this.route('create');
    this.route('show', {path: ':recipe_id'});
    this.route('edit', {path: ':recipe_id/edit'});
  });

  this.route('login');
  this.route('logout');
  this.route('signup');

  this.route('settings');
  this.route('pantry');
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
  return this.store.find('user', 'user_id_ollie');
 }
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('recipe');
  }
});

App.RecipesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('recipe');
  }
});

App.ShowRecipesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('recipe', 'show');
  }
});

App.LoginRoute = Ember.Route.extend({
   model: function() {
     return this.store.find('user');
   }
});
