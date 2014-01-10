# global describe, beforeEach, assert, it
"use strict"

describe 'Todo View', ->
  beforeEach ->
    @Todo = new bbCoffee.Views.TodoView();
