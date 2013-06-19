/*global bbHandlebars, $*/
'use strict';


window.bbHandlebars = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    bbHandlebars.init();
});
