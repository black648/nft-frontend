// 상태에서 todos 배열을 선택하는 기본 선택자
import {RootState} from "./store";
import {createSelector} from "reselect";

const selectTodos = (state: RootState) => state.todoSlice.todos;

// todos 배열을 등록일 기준 내림차순으로 정렬하여 반환하는 선택자
export const selectList = createSelector([selectTodos], (todos) =>
    todos.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
);