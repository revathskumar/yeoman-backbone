/*global requirejsMultipage, Backbone, JST*/

define(['backbone', 'template'],function(Backbone, JST){
    var page1_view =  Backbone.View.extend({

        template: JST['app/scripts/templates/page1.ejs'],

        render: function(){
            this.$el.html(this.template());
        }

    });

    return page1_view;
});

