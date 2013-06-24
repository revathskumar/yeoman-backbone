/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        templates:{
            exports: 'JST'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',
        bootstrap: 'vendor/bootstrap'
    }
});

require([
    'backbone',
    'views/index-view',
    'views/todo_form-view'
], function (Backbone, IndexView, TodoForm) {
    var index_view = new IndexView({el: $('.container')});
    index_view.render();
    var todo_form = new TodoForm({el: $(".hero-unit")})
    todo_form.render();
    Backbone.history.start();
});
