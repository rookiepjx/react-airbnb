import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "normalize.css";
import "./assets/css/index.less";
import store from './store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Suspense fallback={<div>loading...</div>}>
    <HashRouter>
      <App />
    </HashRouter>
    </Suspense>
    </Provider>
  </React.StrictMode>
);
