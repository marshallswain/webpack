import assert from 'chai/chai'
import Vue from 'vue/dist/vue'
import 'steal-mocha'
import TodoList from './TodoList.vue'

function getInstance (Component, options) {
  const Constructor = Vue.extend(Component)
  return new Constructor(options)
}

describe('TodoList', () => {
  it('has no todos by default', () => {
    const component = getInstance(TodoList)
    assert(component.todos.length === 0)
  })

  it('can add todos', () => {
    const component = getInstance(TodoList)
    const description = 'Do the dishes'

    // Add a todo
    component.addTodo(description)

    assert(component.todos.length === 1)
    assert(component.todos[0].description === description)
  })
})
