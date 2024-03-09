import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { ThemeProvider } from "styled-components";
// 如果material搭配styled-components使用，ThemeProvider和theme需要修改为从material引入
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "normalize.css";

import App from "./App";
import "./assets/css/index.less";
import store from "./store";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
const _theme = createTheme(theme);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={_theme}>
        <Suspense fallback={<div>loading...</div>}>
          <HashRouter>
            <App />
          </HashRouter>
        </Suspense>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
