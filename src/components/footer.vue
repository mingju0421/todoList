<template>
  <footer id="footer">
    <div class="footer_left">
      <input type="checkbox" name="" id="" v-model="allSelect">
      <span>已完成{{completed}} / 全部{{todoList.length}}</span>
    </div>
    <div class="footer_right">
      <button @click="deleteAllComputed">清除已完成任务</button>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['todoList', 'deleteAllComputed'],
  computed: {
    completed () {
      return this.todoList.reduce((number, todo) => number + (todo.isSelect ? 1 : 0), 0)
    },
    allSelect: {
      get () {
        return this.completed === this.todoList.length && this.todoList.length !== 0
      },
      set (value) {
        this.todoList.forEach(todo => {
          todo.isSelect = value
        })
      }
    }
  }
}
</script>

<style>
#footer {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
#footer .footer_left span {
  padding-left: 20px ;
}
</style>
