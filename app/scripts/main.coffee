window.bbCoffee =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  init: ->
    index = new bbCoffee.Views.TodoFormView({el: $('.container')})
    index.render()



$ ->
  bbCoffee.init();
