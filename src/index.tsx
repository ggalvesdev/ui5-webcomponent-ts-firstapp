import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@ui5/webcomponents-react/lib/ThemeProvider";

ReactDOM.render(
  <div>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </div>,
  document.getElementById("root")
);
