/*global bb, $*/

window.bb = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        console.log('Hello Backbone');
        window.bb.todos = new bb.Collections.TodosCollection();
        var index = new bb.Views.IndexView({el: $(".container")});
        index.render()
        bb.todos.fetch();
    }
};

/* Order and include as you please. */
require('.tmp/scripts/templates');
require('app/scripts/views/*');
require('app/scripts/models/*');
require('app/scripts/collections/*');
require('app/scripts/routers/*');

$(document).ready(function () {
    bb.init();
});
