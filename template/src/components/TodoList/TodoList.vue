<template>
  <ul class="todo-list">
    <form @submit.prevent="addTodo(description)">
      <input type="text" placeholder="Description" v-model="description">
      <button type="submit">Add Todo</button>
    </form>
    
    <li v-for="todo in todos">
      {{todo.description}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'todo-list',
  data () {
    return {
      description: '',
      todos: [],
      addTodo (description) {
        this.todos.push({description, completed: false})
        this.description = ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
todo-list {
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
}
</style>
