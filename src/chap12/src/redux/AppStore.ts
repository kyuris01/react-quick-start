import TodoReducer from "./TodoReducer";
import { configureStore } from "@reduxjs/toolkit";

const AppStore = configureStore({ reducer: TodoReducer });
export default AppStore;
