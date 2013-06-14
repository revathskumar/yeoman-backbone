/*global bb, Backbone, JST*/

bb.Views.IndexView = Backbone.View.extend({

    template: JST['app/scripts/templates/index.ejs'],

    render: function(){
        $(this.el).html(this.template());
    }

});
