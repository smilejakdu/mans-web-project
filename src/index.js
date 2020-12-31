import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PageRouter from "./PageRouter";
import {BrowserRouter} from 'react-router-dom';
// redux
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./modules";

const store = createStore(rootReducer);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <PageRouter/>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
