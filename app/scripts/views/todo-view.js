/*global bb, Backbone, JST*/

bb.Views.TodoView = Backbone.View.extend({
    initialize: function(){
        this.model.on('change', this.render, this)
    },

    tagName: "li",

    template: JST['app/scripts/templates/todo.ejs'],

    render: function(){
        this.$el.html(this.template({todo:this.model.toJSON()}));
        return this;
    }

});
