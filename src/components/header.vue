<template>
  <header id="header">
    <input type="text" placeholder="请输入你的任务名称,按回车键确认" @keyup.enter="add" v-model="input_value">
  </header>
</template>

<script>
export default {
  data () {
    return {
      input_value: ''
    }
  },
  props: {
    addTodo: Function
  },
  methods: {
    add () {
      if (this.input_value.trim()) {
        this.addTodo(this.input_value.trim())
        this.input_value = ''
      }
    }
  }
}
</script>

<style>
#header {
  width: 100%;
}
#header input {
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #999;
}
</style>
