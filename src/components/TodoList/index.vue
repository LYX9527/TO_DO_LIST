<template>
  <div>
    <item
      v-for="item of todoList"
      :key="item.id"
      :item="item"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDoing="setDoing"
    ></item>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType } from "vue";
import { IUseTodo, useTodo } from "../../hooks";
import { ITodo } from "../../typings";
import item from "./item.vue";
export default defineComponent({
  components: { item },
  props: {
    todoList: Array as PropType<ITodo[]>,
  },
  setup() {
    const {removeTodo, setStatus, setDoing}:IUseTodo = useTodo();
    return{removeTodo, setStatus, setDoing}
  },
});
</script>

<style>
</style>