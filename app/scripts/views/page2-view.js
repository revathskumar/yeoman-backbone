/*global requirejsMultipage, Backbone, JST*/

define(['backbone', 'template'],function(Backbone, JST){
    var page2_view =  Backbone.View.extend({

        template: JST['app/scripts/templates/page2.ejs'],

        render: function(){
            this.$el.html(this.template());
        }

    });

    return page2_view;
});
