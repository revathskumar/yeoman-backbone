/*global require*/
'use strict';

require([
    'backbone'
], function (Backbone) {
    var page = new page1({el: $('.render')});
    page.render();
});
