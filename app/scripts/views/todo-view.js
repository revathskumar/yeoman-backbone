/*global bb, Backbone, JST*/

bb.Views.TodoView = Backbone.View.extend({
    initialize: function(){
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.remove, this);
    },
    events: {
        'click input[type=checkbox]': 'updateDone',
        'click .icon-trash': 'del'
    },

    del: function(){
        this.model.destroy();
    },

    updateDone: function(){
        this.model.toggle();
    },

    tagName: 'li',

    template: JST['app/scripts/templates/todo.ejs'],

    render: function(){
        this.$el.html(this.template({todo:this.model.toJSON()}));
        return this;
    }

});
