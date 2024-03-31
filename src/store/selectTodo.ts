import {RootState} from "./store";
import {createSelector} from "reselect";

const selectTodos = (state: RootState) => state.todoSlice.todos;

// todo List 조회
export const selectList = createSelector([selectTodos], (todos) =>
    todos.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
);

// todo 1건 조회
export const selectTodoById = createSelector(
    [(state: RootState, id: number) => state.todoSlice.todos.find(todo => todo.id === id)],
    (todo) => todo
);