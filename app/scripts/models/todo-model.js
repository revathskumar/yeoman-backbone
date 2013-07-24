/*global bb, Backbone*/
'use strict';

bb.Models.TodoModel = Backbone.Model.extend({

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
