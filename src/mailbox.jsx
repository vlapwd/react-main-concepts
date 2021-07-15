import React from "react";

export function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  const count = 0;
  return (
    <div>
      <h2>Hello!</h2>
      {unreadMessages.length > 0 && (
        <h3>You have {unreadMessages.length} inread messages.</h3>
      )}
      {count && <h3>Messages: {count}</h3>}
    </div>
  );
}
