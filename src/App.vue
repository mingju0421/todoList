<template>
  <div id="app">
    <Header :addTodo='addTodo'/>
    <List :todoList="todoList" :deleteTodo="deleteTodo"/>
    <Footer :todoList="todoList" :deleteAllComputed='deleteAllComputed'/>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
import List from './components/list'
import StorageUtils from './utiles/storageUtils'

export default {
  data () {
    return {
      todoList: StorageUtils.readTodoList()
    }
  },
  components: {
    Header,
    Footer,
    List
  },
  methods: {
    addTodo (value) {
      console.log(value)
      this.todoList.push({'todo': value, isSelect: false})
    },
    deleteTodo (index) {
      this.todoList.splice(index, 1)
    },
    deleteAllComputed () {
      this.todoList = this.todoList.filter(todo => !todo.isSelect)
    }
  },
  watch: {
    todoList: {
      deep: true,
      handler: StorageUtils.saveTodoList
    }
  }
}
</script>

<style scoped>
#app {
  width: 600px;
  padding: 15px;
  border: 1px solid #999;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 100px auto;
}
</style>
