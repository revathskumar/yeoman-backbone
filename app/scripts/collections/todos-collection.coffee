class bbCoffee.Collections.TodosCollection extends Backbone.Collection
  @model: bbCoffee.Models.TodoModel
  localStorage: new Backbone.LocalStorage('todos')

