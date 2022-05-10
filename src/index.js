import React from "react";
import ThemeProvider from "./core/theme";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import store from "./store";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
