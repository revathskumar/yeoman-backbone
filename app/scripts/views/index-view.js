define(function(){
    var page1_view =  Backbone.View.extend({

        template: JST['app/scripts/templates/index.ejs'],

        render: function(){
            this.$el.html(template());
        }

    });

    return page1_view;
});
