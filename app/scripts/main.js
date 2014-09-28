/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap'
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
