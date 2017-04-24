<template>
  <ul class="todo-list">
    <li v-for="todos">
      {{description}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'todo-list',
  data () {
    return {
      todos: [],
      addTodo (description) {
        this.todos.push({description, completed: false})
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
