/*global bbMustache, $*/
'use strict';


window.bbMustache = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    bbMustache.init();
});
