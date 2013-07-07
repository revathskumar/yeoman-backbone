/*global describe, it, bb, expect, beforeEach */
'use strict';

(function () {
    describe('Todo Model', function(){

        beforeEach(function(){
            this.todo = new bb.Models.TodoModel();
        });

        it('title should be empty', function(){
            expect(this.todo.get('todo')).toEqual('');
        });

        it('should not be completed', function(){
            expect(this.todo.get('done')).toBeFalsy()
        });
    });
})();
