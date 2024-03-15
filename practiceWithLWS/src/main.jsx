import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// const value = { name: "Rashed Abdullah", profession: "Front-end developer" };
// const myElement = React.createElement(
//   "div",
//   value,
//   React.createElement(
//     "p",
//     null,
//     React.createElement(
//       "span",
//       null,
//       React.createElement(
//         "span",
//         null,
//         React.createElement(
//           "span",
//           null,
//           React.createElement("span", null, "Rashed Abdullah")
//         )
//       )
//     )
//   )
// );

// const jsxSyntaxt = React.createElement(<div>This is JSX syntax like HTML</div>);

// ReactDOM.createRoot(document.getElementById("root")).render(myElement);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />

    <App>
      <p className="sm:bg-red-500 bg-green-500 text-white p-3 text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum a nisi,
        reiciendis ad obcaecati illum autem dolore, sunt ratione, totam
        dignissimos voluptatem itaque necessitatibus! Esse laudantium asperiores
        ducimus illo unde.
      </p>
    </App>
  </React.StrictMode>
);
