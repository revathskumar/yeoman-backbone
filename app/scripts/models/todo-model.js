/*global define*/
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var TodoModel = Backbone.Model.extend({
        defaults:{
        }
    });

    return TodoModel;
});
