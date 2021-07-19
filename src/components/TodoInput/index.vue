<template>
  <div>
    <input type="text" v-model="todovalue" @keyup="setTodovalue" placeholder="请输入待办"/>
  </div>
</template>

<script lang='ts'>
import { defineComponent, toRefs, ref } from "vue";
import { IUseTodo, useTodo } from "../../hooks";
export default defineComponent({
  setup() {
    const todovalue = ref<string>("");
    const { setTodo }: IUseTodo = useTodo();
    const setTodovalue = (e: KeyboardEvent): void => {
      if (e.keyCode === 13 && todovalue.value.trim().length) {
        setTodo(todovalue.value);
        todovalue.value = "";
      }
    };
    return { todovalue, setTodovalue };
  },
});
</script>

<style scoped lang='less'>
input{
  width: 600px;
  outline: none;
  border:1px solid #888;
  box-sizing: border-box;
  border-radius:5px;
  padding:0 10px;
  height: 30px;
}
</style>