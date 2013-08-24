/*global suite, test, assert, setup, bb  */
'use strict';

suite('Todo Model', function(){

    setup(function(){
        this.todo = new bb.Models.TodoModel();
    });

    test('todo should be empty', function(){
        assert.equal(this.todo.get('todo'), '');
        assert.isFalse(this.todo.get('done'));
    });

    test('toggle', function(){
        this.todo.set('done', false);
        this.todo.toggle();
        assert.isTrue(this.todo.get('done'));
    });
});
