/*global bb, Backbone*/

bb.Models.TodoModel = Backbone.Model.extend({

    defaults: {
        todo: "",
        done: false
    },

    toggle: function(){
        console.log('on Toggle');
        this.save({
            done: !this.get('done')
        });
    }

});
