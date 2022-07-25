import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { JssProvider } from "react-jss";
import { Provider } from "react-redux";
import "swiper/swiper.min.css";
import setupJss, { jssPlugin } from "./root/styles";
import { HelmetProvider } from "react-helmet-async";
import MetaTags from "./components/MetaTags";
import store from "./root/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <HelmetProvider>
      <MetaTags.Default />
      <JssProvider jss={jssPlugin} registry={setupJss()} id={{ minify: true }}>
        <App />
      </JssProvider>
    </HelmetProvider>
  </Provider>
  // </React.StrictMode>
);
