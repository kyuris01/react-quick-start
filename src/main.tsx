import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "@/index.css";
import App from "@/chap7/7.4.6/App";

createRoot(document.getElementById("root")!).render(<App />);
