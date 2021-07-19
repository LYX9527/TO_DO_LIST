<template>
  <div
    class="box"
    :style="{
      height: high + 'px',
    }"
  >
    <item
      v-for="item in todoList"
      :key="item.id"
      :item="item"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDoing="setDoing"
    ></item>
    <div class="fold" @click="change">展开/收起</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref } from "vue";
import { IUseTodo, useTodo } from "../../hooks";
import { ITodo } from "../../typings";
import item from "./item.vue";
export default defineComponent({
  components: { item },
  props: {
    todoList: Array as PropType<ITodo[]>,
  },
  setup(props) {
    const { removeTodo, setStatus, setDoing }: IUseTodo = useTodo();
    const high: Ref<number> = ref(130);
    const change = (): void => {
      if (high.value === 130) {
        high.value = 400;
        return;
      }
      console.log(props.todoList);

      high.value = 130;
    };
    return { removeTodo, setStatus, setDoing, high, change };
  },
});
</script>

<style scoped lang='less'>
.box {
  width: 600px;
  margin-top: 50px;
  border-top: 1px solid #ccc;
  padding-bottom: 50px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
}
.fold {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 30px;
  background-color: #ccc;
  text-align: center;
  line-height: 30px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 0px 0px 5px 5px;
  cursor: pointer;
}
</style>