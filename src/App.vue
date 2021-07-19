<template>
<div>
  <todoinput/>
  <todolist
  :todoList="todoList"
  />
</div>
</template>
<script lang='ts'>
import { computed, onMounted } from 'vue';
import todoinput from './components/TodoInput/index.vue'
import todolist from './components/TodoList/index.vue'
import { IUseTodo, useTodo } from './hooks'
import { Store, useStore } from 'vuex';
export default {
  components: {todoinput,todolist},
  setup() {
    const {setTodoList}:IUseTodo = useTodo();
    const store:Store<any> = useStore();
    onMounted(() => {
      setTodoList();
    });
    return{
      todoList:computed(()=>store.state.list)
    }
  }
}
</script>
<style lang="less">
</style>
