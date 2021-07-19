<template>
  <div class="list">
    <div>
      <input
        type="checkbox"
        :checked="item.status === FINISHED"
        @click="setStatus(item.id)"
      />
    </div>
    <div>
      <span :class="item.status === FINISHED ? 'line-through' : ''">
        {{ item.content }}
      </span>
    </div>
    <div>
      <button @click="removeTodo(item.id)" class="del">删除</button>
      <button
        v-if="item.status !== FINISHED"
        @click="setDoing(item.id)"
        class="ctrl"
        :class="item.status === DOING ? 'doing' : 'willdo'"
      >
        {{ item.status === DOING ? "正在做..." : "马上做" }}
      </button>
      <button v-else class="ctrl">已完成</button>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import { ITodo, TODO_STATUS } from "../../typings";
interface IStatusState {
  DOING: TODO_STATUS;
  FINISHED: TODO_STATUS;
  WILLDO: TODO_STATUS;
}

export default defineComponent({
  props: {
    item: Object as PropType<ITodo>,
  },
  setup(props, { emit }) {
    const statusState = <IStatusState>{
      DOING: TODO_STATUS.DOING,
      FINISHED: TODO_STATUS.FINISHED,
      WILLDO: TODO_STATUS.WILLDO,
    };
    const removeTodo = (id: number): void => {
      emit("removeTodo", id);
    };
    const setStatus = (id: number): void => {
      emit("setStatus", id);
    };
    const setDoing = (id: number): void => {
      emit("setDoing", id);
    };
    return {
      ...statusState,
      removeTodo,
      setStatus,
      setDoing,
    };
  },
});
</script>

<style scoped lang='less'>
.line-through {
  text-decoration: line-through;
}
.ctrl {
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  color: #fff;
  background-color: #aaff;
  height: 30px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
.doing {
  background-color: #a58;
  color: #fff;
}
.willdo {
  background-color: orange;
  color: #fff;
}
.list {
  width: 600px;
  height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  display: flex;
  & > div {
    height: 100%;
    line-height: 50px;
    &:nth-child(1) {
      width: 10%;
    }
    &:nth-child(2) {
      width: 60%;
    }
    &:nth-child(3) {
      width: 30%;
      position: relative;
    }
  }
}
.del {
  outline: none;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 5px;
  height: 30px;
  width: 60px;
  left:10px;
  background-color: #f40;
  // padding: 5px 10px;
  color: #fff;
}
</style>