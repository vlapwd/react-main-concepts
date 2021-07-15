import React from "react";
import ReactDOM from "react-dom";
import { Form } from "./form";
import { Toggle } from "./toggle";
import { LoginControl } from "./loginControl";
import { Mailbox } from "./mailbox";
import { Page } from "./page";

const messages = ["React", "Re: React", "Re:Re: React"];
const element = (
  <div>
    <LoginControl />
    <Page />
    <Mailbox unreadMessages={messages} />
    <Form />
    <Toggle />
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
