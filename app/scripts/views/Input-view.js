/*global bbMustache, Backbone, JST*/

bbMustache.Views.InputView = Backbone.View.extend({

    template: JST['Input'],

    render: function (){
        $(this.el).append(this.template);
    }

});
