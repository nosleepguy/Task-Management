import { SizeContext } from "context/SizeContext";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "redux/reducer";
import "styles/index.css";
import App from "./App";



const middlewares = [thunk];
const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares))
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <SizeContext>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </SizeContext>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
