var Vue = require('vue')
var todoList = require('./todo-list.vue')

new Vue({
  el: 'body',
  components: {
    todos: todoList
  }
})
