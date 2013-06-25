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
    var indexView = new IndexView({el: $('.container')});
    indexView.render();
    var todoForm = new TodoForm({el: $('.hero-unit')});
    todoForm.render();
    Backbone.history.start();
});
