/*global suite, setup, test, bb, assert */
'use strict';

suite('Index view', function () {
    setup(function () {
        this.index = new bb.Views.IndexView({el: $('.container')});
        this.todos = new bb.Collections.TodosCollection();
    });

    test('should exists', function() {
        assert(this.index);
    });

    test('render', function() {
        this.index.render();
        assert.equal(this.index.$el.html().match(/.yeoman/).length,1);
    });

    test('addOne', function () {
        var todoModel1 = new bb.Models.TodoModel({todo: 'todo1'});
        var todoModel2 = new bb.Models.TodoModel({todo: 'todo2'});
        this.index.addOne(todoModel1);
        this.index.addOne(todoModel2);

        assert.equal($('.todo-list').children('li').length, 2);
    });

});
