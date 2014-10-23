App.ShowRecipeController = Ember.ObjectController.extend({
  needs: ['application'],
  currentRecipe: Ember.computed.alias('model')
});
