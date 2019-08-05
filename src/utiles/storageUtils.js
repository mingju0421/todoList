export default {
  readTodoList () {
    return JSON.parse(localStorage.getItem('todoList_key') || '[]')
  },
  saveTodoList (todoList) {
    console.log(todoList)
    localStorage.setItem('todoList_key', JSON.stringify(todoList))
  }
}
