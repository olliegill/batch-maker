App.User = DS.model.extend({
  username: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  recipes: DS.hasMany('recipe')
});

App.Recipe = DS.model.extend({
  image: DS.attr('string'),
  title: DS.attr('string'),
  author: DS.hasProperty('username'),
  makePublic: DS.attr('boolean'),
  makePrivate: DS.attr('boolean'),
  recipeType: DS.attr('string'),
  prepTime: DS.attr('number'),
  cookTime: DS.attr('number'),
  cookTemp: DS.attr('number'),
  tempType: DS.attr('string'),
  amount: DS.attr('number'),
  foodType: DS.attr('string')

});
