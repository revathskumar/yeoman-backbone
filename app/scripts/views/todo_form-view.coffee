class bbCoffee.Views.TodoFormView extends Backbone.View
  template: JST['app/scripts/templates/todo_form.ejs']

  render: ->
    $(@el).html(@template())
