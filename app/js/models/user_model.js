App.User = DS.Model.extend({
  name: DS.attr('string'),
  recipes: DS.hasMany('recipe', {async: true})
});
