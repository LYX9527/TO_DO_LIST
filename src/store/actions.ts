import { IState, ITodo } from "@/typings";
import { Commit } from "vuex";
import { REMOVE_TODO, SET_DOING_STATUS, SET_TODO, SET_TODO_LIST, SET_TODO_STATUS } from "./actionTypes";
interface ICtx {
    commit: Commit,
    state: IState,
}
export default {
    [SET_TODO]({ commit }: ICtx, todo: ITodo): void {
        commit(SET_TODO, todo);
    },
    [SET_TODO_LIST]({ commit }: ICtx, todoList: ITodo[]): void {
        commit(SET_TODO_LIST, todoList);
    },
    [REMOVE_TODO]({ commit }: ICtx, id: number): void {
        commit(REMOVE_TODO, id);
    },
    [SET_TODO_STATUS]({ commit }: ICtx, id: number): void {
        commit(SET_TODO_STATUS, id);
    },
    [SET_DOING_STATUS]({ commit }: ICtx, id: number): void {
        commit(SET_DOING_STATUS, id);
    },
}