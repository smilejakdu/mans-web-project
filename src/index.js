import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PageRouter from "./PageRouter";
import { AppProvider } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <PageRouter />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
