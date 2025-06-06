import TimeReducer, { HomeStatesType } from "./TimeReducer";
import TodoReducer, { TodoStatesType } from "./TodoReducer";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

export type RootStatesType = {
  home: HomeStatesType;
  todos: TodoStatesType;
};

const RootReducer = combineReducers({
  home: TimeReducer,
  todos: TodoReducer,
});

const AppStore = configureStore({ reducer: RootReducer });
export default AppStore;
