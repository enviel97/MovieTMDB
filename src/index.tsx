import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { JssProvider } from "react-jss";
import { Provider } from "react-redux";
import "swiper/swiper.min.css";
import setupJss, { jssPlugin } from "./root/styles";
import store from "./root/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <JssProvider jss={jssPlugin} registry={setupJss()} id={{ minify: true }}>
      <App />
    </JssProvider>
  </Provider>
  // </React.StrictMode>
);
