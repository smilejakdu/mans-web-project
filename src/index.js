import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PageRouter from "./PageRouter";
// redux

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PageRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
