/*global define*/

define([
    'underscore',
    'backbone',
    'models/todos-model'
], function (_, Backbone, TodoModel) {
    'use strict';

    var TodosCollection = Backbone.Collection.extend({
        model: TodoModel
    });

    return TodosCollection;
});
