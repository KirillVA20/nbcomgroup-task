import React from "react";
import ReactDOM from "react-dom";
import "../style/style.scss";
import "@polymer/font-roboto/roboto.js";
import App from "../components/App";

//Получение метода рендера в зависимости от того
//является ли данное выполнение кода рендерингом в серверной части
const render = "isSSR" in window ? ReactDOM.hydrate : ReactDOM.render;

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
