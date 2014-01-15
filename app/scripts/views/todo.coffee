'use strict';

class bbCoffee.Views.TodoView extends Backbone.View
  initialize: (options) ->
    @listenTo(@model, 'change', @render)
    @listenTo(@model, 'destroy', @remove)

  tagName: 'li'

  template: JST['app/scripts/templates/todo.ejs']
  events:
    'click #done': 'changeStatus'
    'click .glyphicon-trash': 'deleteTodo'

  deleteTodo: (e) ->
    @model.destroy()

  changeStatus: (e) ->
    @model.set('completed', $(e.target).is(':checked'))
    @model.save()
    # console.log @model.get

  render: ->
    $(@el).html(@template({todo: @model.toJSON()}))
    @
