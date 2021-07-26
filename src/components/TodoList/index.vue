<template>
  <div
    class="box"
    :style="{
      height: high + 'px',
    }"
  >
    <transition-group  name="list-complete"  tag="div">
      <item
        v-for="item in todoList"
        :key="item.id"
        :item="item"
        @removeTodo="removeTodo"
        @setStatus="setStatus"
        @setDoing="setDoing"
        class="list-complete-item"
      ></item>
    </transition-group>
    <div class="fold" @click="change">{{ status ? "收起" : "展开" }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref, toRaw, watchEffect } from "vue";
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
    const status: Ref<boolean> = ref(false);
    const change = (): void => {
      const num: ITodo[] = toRaw(props.todoList)!;
      if (status.value === false) {
        high.value = num.length * 50 - 20;
        status.value = true;
        return;
      }
      high.value = 130;
      status.value = false;
    };
    watchEffect(() => {
      const num: ITodo[] = toRaw(props.todoList)!;
      status.value = true;
      high.value = num.length * 50 - 20;
    });
    return { removeTodo, setStatus, setDoing, change, high, status };
  },
});
</script>

<style scoped lang='less'>
.box {
  width: 600px;
  border-radius:5px 5px 0 0;
  margin-top: 50px;
  border-top: 1px solid #ccc;
  padding-bottom: 50px;
  position: relative;
  overflow: hidden;
  transition: all 0.8s;
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
body {
  margin: 30px;
}

button {
  margin-right: 10px;
}

.list-complete-item {
  transition: all 0.8s ease;
  margin-right: 10px;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>