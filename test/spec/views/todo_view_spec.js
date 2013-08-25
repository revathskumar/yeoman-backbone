/*global suite, setup, test, bb, assert */
'use strict';

suite('Todo view', function () {
    setup(function () {
        var todoModel = new bb.Models.TodoModel({todo: 'todo1'});
        this.todo = new bb.Views.TodoView({model: todoModel});
    });

    test('should exists', function() {
        assert(this.todo);
    });

    test('render', function() {
        this.todo.render();
        assert.equal(this.todo.$el.html().match(/<p>/).length,1);
    });
});
