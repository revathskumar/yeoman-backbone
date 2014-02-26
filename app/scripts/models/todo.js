/*global Todo, Backbone*/

Todo.Models = Todo.Models || {};

(function () {
    'use strict';

    Todo.Models.TodoModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
