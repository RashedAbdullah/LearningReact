import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const myElement = React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    React.createElement(
      "span",
      null,
      React.createElement(
        "span",
        null,
        React.createElement(
          "span",
          null,
          React.createElement("span", null, "Rashed Abdullah")
        )
      )
    )
  )
);

// const jsxSyntaxt = React.createElement(<div>This is JSX syntax like HTML</div>);

// ReactDOM.createRoot(document.getElementById("root")).render(jsxSyntaxt);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
