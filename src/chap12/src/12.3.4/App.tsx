import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoList from "./pages/TodoList";
import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="todos" element={<TodoList />}></Route>
          <Route path="todos/add" element={<AddTodo />}></Route>
          <Route path="todos/edit/:id" element={<EditTodo />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
