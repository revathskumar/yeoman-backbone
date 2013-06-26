/*global bb, Backbone, JST*/

bb.Views.TodoFormView = Backbone.View.extend({

    template: JST['app/scripts/templates/todo_form.ejs'],

    render: function(){
        $(this.el).append(this.template());
    }

});
