import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "@/index.css";
import App from "@/chap6/6.6.3/App";

createRoot(document.getElementById("root")!).render(<App />);
