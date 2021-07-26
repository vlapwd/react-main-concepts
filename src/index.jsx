import React from "react";
import ReactDOM from "react-dom";
import { Form } from "./form";
import { Toggle } from "./toggle";
import { LoginControl } from "./loginControl";
import { Mailbox } from "./mailbox";
import { Page } from "./page";
import { ListItems } from "./ListItems";

const messages = ["React", "Re: React", "Re:Re: React"];
const numbers = [1, 2, 3, 4, 5];
const element = (
  <div>
    <LoginControl />
    <Page />
    <Mailbox unreadMessages={messages} />
    <Form />
    <Toggle />
    <ListItems numbers={numbers} />
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
