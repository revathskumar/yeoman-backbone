/*global Todo, Backbone, JST, $ */
(function(){
    'use strict';
    Todo.Views.IndexView = Backbone.View.extend({

        initialize: function(){
            console.log('Index view');
            this.input = $('#new-todo');
            Todo.todos.on('add', this.addOne);
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
            Todo.todos.create({
                todo: inputVal,
                done: false
            });
            $('input[name=todo]').val('');
            return false;
        },

        addOne: function( todo ){
            var todoView = new Todo.Views.TodoView({model: todo});
            $('.todo-list').append(todoView.render().el);
        },

        render: function(){
            $(this.el).html(this.template());
        }

    });
})();

