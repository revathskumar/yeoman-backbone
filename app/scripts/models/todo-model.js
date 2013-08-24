/*global bb, Backbone, Store*/
'use strict';

bb.Models.TodoModel = Backbone.Model.extend({

    localStorage: new Store('todos-backbone'),

    defaults: {
        todo: '',
        done: false
    },

    toggle: function(){
        this.save({
            done: !this.get('done')
        });
    }
});
