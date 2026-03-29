import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
