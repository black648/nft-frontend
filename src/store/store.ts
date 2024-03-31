import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

// 리듀서 조각을 일원화 하도록 설정
const rootReducer = combineReducers({
    todoSlice,
});

// 스토어 등록
export const store = configureStore({
    reducer: {rootReducer}
});

// 리턴타입 설정
export type RootStore = ReturnType<typeof rootReducer>;
