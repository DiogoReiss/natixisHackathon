import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "src/assets/scss/index.scss";
import App from "./App";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
