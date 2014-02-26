/*global Todo, Backbone, Store*/

Todo.Collections.TodosCollection = Backbone.Collection.extend({

    model: Todo.Models.TodoModel,
    localStorage: new Store('todos-backbone')

});

