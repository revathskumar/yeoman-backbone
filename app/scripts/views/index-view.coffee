class bbCoffee.Views.IndexView extends Backbone.View
  template: JST['app/scripts/templates/index.ejs']

  initialize: (options) ->
    @listenTo(@collection, 'add', @addOne);

  events:
    'keypress #new-todo': 'enterTodo'

  addOne: (todo) ->
    view = new bbCoffee.Views.TodoView({model: todo});
    $('.todo-list').append(view.render().el);

  enterTodo: (e) ->
    if e.charCode == 13 || e.keyCode == 13
      todo = new bbCoffee.Models.TodoModel({todo: $('#new-todo').val(), completed: false});
      @collection.create(todo)
      $('#new-todo').val('')

  render: ->
    $(@el).html(@template())
    return @
