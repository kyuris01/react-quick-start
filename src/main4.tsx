import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "@/index.css";
import { TodoProvider } from "./chap8/8.2/TodoContext";
import App from "@/chap8/8.2/components/App";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
