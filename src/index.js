import React from "react";
import ReactDOM from "react-dom";

const fName = "Joe";
const lName = "Scott";
const num = 13;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {3 + 4}!</p>
  </div>,
  document.getElementById("root")
);
