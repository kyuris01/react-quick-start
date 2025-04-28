import { produce } from "immer";
import React, { useEffect, useState } from "react";
import App from "./App";
import axios from "axios";

export type TodoItemType = { id: number; todo: string; desc: string; done: boolean };
export type StatesType = { todoList: Array<TodoItemType>; isLoading: boolean };
export type CallbacksType = {
  fetchTodoList: () => void;
  addTodo: (todo: string, desc: string, callback: () => void) => void;
  deleteTodo: (id: number) => void;
  toggleDone: (id: number) => void;
  updateTodo: (id: number, todo: string, desc: string, done: boolean, callback: () => void) => void;
};

const USER = "gdhong";
const BASEURI = "/api/todolist_long/" + USER;

const AppContainer = () => {
  let [todoList, setTodoList] = useState<Array<TodoItemType>>([]);
  let [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchTodoList();
  }, []);

  const fetchTodoList = async () => {
    setTodoList([]);
    setIsLoading(true);
    try {
      const response = await axios.get(BASEURI);
      setTodoList(response.data);
    } catch (e) {
      if (e instanceof Error) alert("조회 실패: " + e.message);
      else alert("조회 실패 :" + e);
    }
    setIsLoading(false);
  };

  const addTodo = async (todo: string, desc: string, callback: () => void) => {
    setIsLoading(true);
    try {
      const response = await axios.post(BASEURI, { todo, desc });
      if (response.data.status === "success") {
        //한건의 할일 추가가 성공이라면 전체 할일 목록을 다시 조회하는 것이 아니라
        //추가된 한건의 정보만 state에 추가합니다.
        let newTodoList = produce(todoList, (draft) => {
          draft.push({ ...response.data.item, done: false });
        });
        setTodoList(newTodoList);
        callback();
      } else {
        alert("할일 추가실패:" + response.data.message);
      }
    } catch (e) {
      if (e instanceof Error) alert("할일 추가실패:" + e.message);
      else alert("할일 추가실패:" + e);
    }
    setIsLoading(false);
  };

  //할일 한건을 삭제하는 기능을 제공하는 함수
  const deleteTodo = async (id: number) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`${BASEURI}/${id}`);
      if (response.data.status === "success") {
        let index = todoList.findIndex((todo) => todo.id === id);
        let newTodoList = produce(todoList, (draft) => {
          draft.splice(index, 1);
        });
        setTodoList(newTodoList);
      } else {
        alert("할일 삭제 실패:" + response.data.message);
      }
    } catch (e) {
      if (e instanceof Error) alert("할일 삭제 실패:" + e.message);
      else alert("할일 삭제 실패:" + e);
    }
    setIsLoading(false);
  };

  //할일의 완료 여부를 토글하는 기능을 제공하는 함수
  const toggleDone = async (id: number) => {
    setIsLoading(true);
    try {
      let todoItem = todoList.find((todo) => todo.id === id);
      const response = await axios.put(`${BASEURI}/${id}`, { ...todoItem, done: !todoItem?.done });
      if (response.data.status === "success") {
        let index = todoList.findIndex((todo) => todo.id === id);
        let newTodoList = produce(todoList, (draft) => {
          draft[index].done = !draft[index].done;
        });
        setTodoList(newTodoList);
      } else {
        alert("완료 토글 실패 : " + response.data.message);
      }
    } catch (e) {
      if (e instanceof Error) alert("완료 토글 실패:" + e.message);
      else alert("완료 토글 실패:" + e);
    }
    setIsLoading(false);
  };

  //할일 수정 기능을 제공하는 함수
  //할일을 수정이 성공하면 마지막 인자로 전달된 callback을 호출합니다.
  const updateTodo = async (
    id: number,
    todo: string,
    desc: string,
    done: boolean,
    callback: () => void
  ) => {
    setIsLoading(true);
    try {
      const response = await axios.put(`${BASEURI}/${id}`, { todo, desc, done });
      if (response.data.status === "success") {
        let index = todoList.findIndex((todo) => todo.id === id);
        let newTodoList = produce(todoList, (draft) => {
          draft[index] = { ...draft[index], todo, desc, done };
        });
        setTodoList(newTodoList);
        callback();
      } else {
        alert("할일 수정 실패 : " + response.data.message);
      }
    } catch (e) {
      if (e instanceof Error) alert("할일 수정 실패 :" + e.message);
      else alert("할일 수정 실패 :" + e);
    }
    setIsLoading(false);
  };

  const callbacks: CallbacksType = { fetchTodoList, addTodo, deleteTodo, toggleDone, updateTodo };
  const states: StatesType = { todoList, isLoading };

  return <App callbacks={callbacks} states={states} />;
};

export default AppContainer;
