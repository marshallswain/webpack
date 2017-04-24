import Vue from 'vue/dist/vue'
import TodoList from './TodoList.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#demo',
  components: { TodoList }
})
