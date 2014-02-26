/*global Todo, Backbone*/

Todo.Collections = Todo.Collections || {};

(function () {
    'use strict';

    Todo.Collections.SampleCollection = Backbone.Collection.extend({

        model: Todo.Models.SampleModel

    });

})();
