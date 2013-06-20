/*global bb, $*/

window.bb = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        console.log('Hello Backbone')
        var index = new bb.Views.IndexView({el: $(".container")});
        index.render();
    }
};

/* Order and include as you please. */
require('.tmp/scripts/templates');
require('app/scripts/views/*');
require('app/scripts/controllers/*');
require('app/scripts/models/*');
require('app/scripts/routers/*');

$(document).ready(function () {
    bb.init();
});