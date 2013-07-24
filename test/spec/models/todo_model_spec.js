/*global suite, test, assert, setup, bb  */
'use strict';

suite('Todo Model', function(){

    setup(function(){
        this.todo = new bb.Models.TodoModel();
    });

    test('todo should be empty', function(){
        assert.equal(this.todo.get('todo'), '');
        assert.equal(this.todo.get('done'), false);
    });

    test('toggle', function(){
        this.todo.toggle();
        assert.equal(this.todo.get('done'), true);
    });
});
