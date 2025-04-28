import { produce } from "immer";
import React, { JSX, useState } from "react";

export type TodoListItemType = {
  no: number;
  todo: string;
  done: boolean;
};

export type TodoListContextValueType = {
  state: { todoList: Array<TodoListItemType> };
  actions: {
    addTodo: (todo: string) => void;
    deleteTodo: (no: number) => void;
    toggleDone: (no: number) => void;
  };
};

//위에까지 타입 정의

const TodoContext = React.createContext<TodoListContextValueType | null>(null);

type PropsType = {
  children: JSX.Element | JSX.Element[];
};

export const TodoProvider = (props: PropsType) => {
  const [todoList, setTodoList] = useState<Array<TodoListItemType>>([
    { no: 1, todo: "React학습1", done: false },
    { no: 2, todo: "React학습2", done: false },
    { no: 3, todo: "React학습3", done: true },
    { no: 4, todo: "React학습4", done: false },
  ]);

  const addTodo = (todo: string) => {
    const newTodoList = produce(todoList, (draft: Array<TodoListItemType>) => {
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (no: number) => {
    const index = todoList.findIndex((item) => item.no === no);
    const newTodoList = produce(todoList, (draft: Array<TodoListItemType>) => {
      draft.splice(index, 1);
    });
    setTodoList(newTodoList);
  };

  const toggleDone = (no: number) => {
    const index = todoList.findIndex((item) => item.no === no);
    const newTodoList = produce(todoList, (draft: Array<TodoListItemType>) => {
      draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };

  const values: TodoListContextValueType = {
    state: { todoList },
    actions: { addTodo, deleteTodo, toggleDone },
  };

  return <TodoContext.Provider value={values}>{props.children}</TodoContext.Provider>;
};

export default TodoContext;
