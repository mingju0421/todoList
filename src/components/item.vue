<template>
  <li>
    <div class="left">
      <input type="checkbox" name="" id="" v-model="todo.isSelect">
      <span>{{todo.todo}}</span>
    </div>
    <div class="right">
      <button @click="del">删除</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['todo', 'deleteTodo', 'index'],
  methods: {
    del () {
      if (confirm(`确实要删除 ` + this.todo.todo + ` 吗?`)) {
        this.deleteTodo(this.index)
      }
    }
  }
}
</script>

<style>
li {
  width: 100%;
  box-sizing: border-box;
  padding: 15px 10px;
  border: 1px solid #999;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
