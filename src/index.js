import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="best-application-ever">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("best-application-ever-root")
);
