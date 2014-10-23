App.RecipesController = Ember.ArrayController.extend({
  needs: ['application'],

  recipeType: [
    'Breakfast',
    'Lunch',
    'Dinner',
    'Dessert',
    ],

  tempType: [
    'ºF',
    'ºC',
  ],

  actions: {
    createRecipe: function(){
      var user = this.get('controllers.application.currentUser');

      var newRecipe = this.store.createRecord('recipe', {
        title: this.get("title"),
        author: user,
        makePrivate: this.get("isPrivate"),
        makePublic: this.get("isPublic"),
        prepTime: this.get("prepTime"),
        cookTime: this.get("cookTime"),
        cookTemp: this.get("cookTemp"),
        recipeType: this.get('selectedType'),
        tempType: this.get('selectedTemp'),
        amount: this.get('amount'),
        foodType: this.get('foodType'),
        steps: this.get('steps'),
        personalNotes: this.get('personalNotes'),

      });

      console.log(this.get('controllers.application.currentUser'));

      newRecipe.save().then(function(){
          user.get("recipes").addObject(newRecipe);
          user.save();
      });


      // this.set('makePrivate', false);
      // this.set('makePublic', false);
      // this.set('prepTime', '');
      // this.set('cookTime', '');
      // this.set('cookTemp', '');
     }
  }
});
