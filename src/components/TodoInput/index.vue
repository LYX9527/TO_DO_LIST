<template>
  <div>
    <input type="text" v-model="todovalue" @keyup="setTodovalue" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, toRefs, ref } from "vue";
import { IUseTodo, useTodo } from "../../hooks";
export default defineComponent({
  setup() {
    const todovalue = ref<string>("");
    const { setTodo }:IUseTodo = useTodo();
    const setTodovalue = (e: KeyboardEvent): void => {
      if (e.keyCode === 13 && todovalue.value.trim().length) {
        setTodo(todovalue.value);
        // alert('当前数据是'+todovalue.value)
        todovalue.value = "";
      }
    };
    return { todovalue, setTodovalue };
  },
});
</script>

<style>
</style>