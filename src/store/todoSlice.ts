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
    },
});

export const {createTodo} = todoSlice.actions;
export default todoSlice.reducer;
