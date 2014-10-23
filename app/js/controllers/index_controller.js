App.IndexController = Ember.ArrayController.extend({
  needs: ['application'],

  actions: {
    createRecipe: function(){
      var user = this.get('controllers.application.currentUser');
      
    }
  }
});
