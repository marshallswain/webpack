<template>
  <div class="todo-list">
    <form @submit.prevent="addTodo(description)">
      <input type="text" placeholder="Description" v-model="description">
      <button type="submit">Add Todo</button>
    </form>
    
    <ul>
      <li v-for="todo in todos">
        {{todo.description}}
      </li>
    </ul>
  </div>
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
.todo-list {
  ul {
    padding: 0;
  }

  li {
    margin: 0;
  }
}
</style>
