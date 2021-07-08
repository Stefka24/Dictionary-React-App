import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <p>
      {" "}
      <a href="https://github.com/Stefka24/Dictionary-React-App">
        Open source
      </a>{" "}
      by Stefka Bodurova
    </p>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
