/*global bb, Backbone, Store*/

bb.Collections.TodosCollection = Backbone.Collection.extend({

    model: bb.Models.TodoModel,
    localStorage: new Store('todos-backbone')

});

