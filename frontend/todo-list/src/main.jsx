import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TodoContextProvider from "./contexts/TodoContext";

ReactDOM.render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
