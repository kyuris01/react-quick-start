import React from "react";
import { CallbacksType, StatesType } from "./AppContainer";
import { Route, BrowserRouter as Router, Routes } from "react-router";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoList from "./pages/TodoList";
import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";
import NotFound from "./pages/NotFound";

type PropsType = {
  states: StatesType;
  callbacks: CallbacksType;
};

const App = ({ states, callbacks }: PropsType) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="todos" element={<TodoList states={states} callbacks={callbacks} />}></Route>
          <Route path="todos/add" element={<AddTodo callbacks={callbacks} />}></Route>
          <Route
            path="todos/edit/:id"
            element={<EditTodo states={states} callbacks={callbacks} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
