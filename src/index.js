import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { BudgetsProvider } from "./context/BudgetsContext";

import App from "./App";

ReactDOM.render(
  <BudgetsProvider>
    <App />
  </BudgetsProvider>,
  document.getElementById("root")
);
