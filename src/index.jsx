import React from "react";
import ReactDOM from "react-dom";
import { Form } from "./form";
import { Toggle } from "./toggle";

const element = (
  <div>
    <Form />
    <Toggle />
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
