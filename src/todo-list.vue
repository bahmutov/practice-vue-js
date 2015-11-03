<style>
.todo-list ul {
  list-style-type: 'none';
}
</style>

<template>
  <strong>Enter a todo:</strong>
  <input v-model="newTodo" @keyup.enter="addTodo">
  <ul>
    <li v-for="todo in todos">
      <span>{{ todo.text }}</span>
      <button @click="removeTodo($index)">X</button>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      newTodo: '',
      todos: [
        { text: 'Add some todos' }
      ]
    }
  },

  methods: {
    addTodo: function () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text: text })
        this.newTodo = ''
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>
