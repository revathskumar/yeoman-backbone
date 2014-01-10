window.bbCoffee =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  init: ->
    'use strict'
    todos = new bbCoffee.Collections.TodosCollection();
    index = new bbCoffee.Views.IndexView({el: $('.jumbotron'), collection: todos})
    index.render()

$ ->
  'use strict'
  bbCoffee.init();
