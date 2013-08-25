/*global bb, $*/


window.bb = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello Backbone');
        window.bb.todos = new bb.Collections.TodosCollection();
        var index = new bb.Views.IndexView({el: $('.container')});
        index.render();
        bb.todos.fetch();
    }
};

$(document).ready(function () {
    'use strict';
    bb.init();
});
