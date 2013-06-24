/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var TodoFormView = Backbone.View.extend({
        template: JST['app/scripts/templates/todo_form.ejs'],
        render: function(){
            $(this.el).append(this.template());
        }
    });

    return TodoFormView;
});
