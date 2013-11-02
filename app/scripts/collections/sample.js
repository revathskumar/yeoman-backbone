/*global bb, Backbone*/

bb.Collections = bb.Collections || {};

(function () {
    'use strict';

    bb.Collections.SampleCollection = Backbone.Collection.extend({

        model: bb.Models.SampleModel

    });

})();
