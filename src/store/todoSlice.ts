import {Todo} from "../types/todo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TodoState {
    todos: Todo[],
}

const initialState: TodoState = {
    todos: []
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        createTodo: (state, action: PayloadAction<Omit<Todo, 'id' | 'updatedAt'>>) => {
            const newTodo: Todo = {
                id: state.todos.length + 1,
                ...action.payload,
                updatedAt: action.payload.createdAt,
            };
            state.todos.push(newTodo);
        },
        updateTodo: (state, action: PayloadAction<Partial<Todo> & { id: number }>) => {
            const { id, ...changes } = action.payload;
            const index = state.todos.findIndex(todo => todo.id === id);
            if (index !== -1) {
                state.todos[index] = {
                    ...state.todos[index],
                    ...changes,
                    updatedAt: changes.updatedAt || new Date().toISOString(), // updatedAt은 변경 시 항상 업데이트
                };
            }
        },
        deleteTodo: (state, action: PayloadAction<{id: number}>) => {
            const { id } = action.payload;
            const index = state.todos.findIndex(todo => todo.id === id);
            if (index !== -1) {
                state.todos.splice(index, 1);
            }
        },
    },
});

export const {createTodo, updateTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
