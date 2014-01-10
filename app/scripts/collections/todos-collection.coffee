class bbCoffee.Collections.TodosCollection extends Backbone.Collection
  model: bbCoffee.Models.TodosModel
  localStorage: new Backbone.LocalStorage('todos');
