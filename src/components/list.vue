<template>
  <ul id="todoList">
    <Item v-for="(todo, index) in todoList" :key="index" :todo='todo' :deleteTodo="deleteTodo" :index="index"/>
  </ul>
</template>

<script>
import Item from './item'
export default {
  props: ['todoList', 'deleteTodo'],
  components: {
    Item
  }
}
</script>

<style>
#todoList {
  width: 100%;
  padding: 20px 0;
}
</style>
