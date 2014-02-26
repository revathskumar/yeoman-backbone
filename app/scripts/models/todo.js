/*global bb, Backbone*/

bb.Models = bb.Models || {};

(function () {
    'use strict';

    bb.Models.TodoModel = Backbone.Model.extend({

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
