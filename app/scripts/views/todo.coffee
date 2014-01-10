'use strict';

class bbCoffee.Views.TodoView extends Backbone.View
  initialize: (options) ->
    @listenTo(@model, 'change', @render)

  tagName: 'li'

  template: JST['app/scripts/templates/todo.ejs']
  events:
    'click #done': 'changeStatus'

  changeStatus: (e) ->
    @model.set('completed', $(e.target).is(':checked'))
    @model.save()
    # console.log @model.get

  render: ->
    $(@el).html(@template({todo: @model.toJSON()}))
    @
