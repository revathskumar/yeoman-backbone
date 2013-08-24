/*global bb, Backbone, JST, $ */
'use strict';
bb.Views.IndexView = Backbone.View.extend({

    initialize: function(){
        this.input = $('#new-todo');
        bb.todos.on('add', this.addOne);
    },

    template: JST['app/scripts/templates/index.ejs'],
    events: {
        'keypress input[name=todo]': 'createOnEnter',
        'submit form': 'submitForm'
    },

    submitForm: function(e){
        e.preventDefault();
        return false;
    },

    createOnEnter: function(e){
        var inputVal = $('input[name=todo]').val();
        if(e.which !== 13 || inputVal === ''){
            return;
        }
        e.preventDefault();
        bb.todos.create({
            todo: inputVal,
            done: false
        });
        $('input[name=todo]').val('');
        return false;
    },

    addOne: function( todo ){
        var todoView = new bb.Views.TodoView({model: todo});
        $('.todo-list').append(todoView.render().el);
    },

    render: function(){
        $(this.el).html(this.template());
    }

});
