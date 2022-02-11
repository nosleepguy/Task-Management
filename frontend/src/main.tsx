import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

import rootReducer from "redux/reducer";

import "styles/index.css";
import 'react-toastify/dist/ReactToastify.css';
import App from "./App";

const middlewares = [thunk];
const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
