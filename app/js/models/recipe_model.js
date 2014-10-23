App.Recipe = DS.Model.extend({
  image: DS.attr('string'),
  title: DS.attr('string'),
  author: DS.belongsTo('user'),
  makePublic: DS.attr('boolean'),
  makePrivate: DS.attr('boolean'),
  recipeType: DS.attr('string'),
  prepTime: DS.attr('number'),
  cookTime: DS.attr('number'),
  cookTemp: DS.attr('number'),
  tempType: DS.attr('string'),
  amount: DS.attr('number'),
  foodType: DS.attr('string'),
  steps: DS.attr('string'),
  personalNotes: DS.attr('string'),

});
