/*global Todo, $*/


window.Todo = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello Backbone');
        window.Todo.todos = new Todo.Collections.TodosCollection();
        var index = new Todo.Views.IndexView({el: $('.container')});
        index.render();
        Todo.todos.fetch();
    }
};

$(document).ready(function () {
    'use strict';
    Todo.init();
});
