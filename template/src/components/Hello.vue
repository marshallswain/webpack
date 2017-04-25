<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <h2>Feathers</h2>
    <ul>
      <li><a href="https://feathersjs.com" target="_blank">Feathers Home</a></li>
      <li><a href="https://docs.feathersjs.com" target="_blank">Feathers Docs</a></li>
      <li><a href="https://github.com/feathersjs/feathers-vuex" target="_blank">feathers-vuex</a></li>
      <li><a href="https://github.com/feathersjs/feathers-chat-vuex" target="_blank">feathers-vuex-chat</a></li>
    </ul>
    <h2>Modlets</h2>
    <ul>
      <li><a href="https://www.bitovi.com/blog/modlet-workflows" target="_blank">Learn about Modlets</a></li>
      <li><a href="https://stealjs.com" target="_blank">StealJS</a></li>
      <li><a href="http://127.0.0.1:8080/src/components/TodoList/TodoList.html" target="_blank">See the TodoList Modlet Demo Page</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: 'Welcome to Your Vue.js App'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
