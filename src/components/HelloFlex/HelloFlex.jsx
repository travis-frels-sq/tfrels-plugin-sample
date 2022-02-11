import React from "react";
import { HelloFlexComponentStyles } from "./HelloFlex.Styles";
import { Actions, TaskHelper } from "@twilio/flex-ui";

const MacroButton = ({ action, message, title, sid }) => (
  <button
    onClick={() => {
      Actions.invokeAction(action, {
        body: message,
        channelSid: sid,
      });
    }}
  >
    {title}
  </button>
);

const Macro = ({ macro: { id, text }, sid }) => (
  <li key={id}>
    <label>
      {text}&nbsp;&nbsp;
      <MacroButton action="SendMessage" message={text} title="send" sid={sid} />
      <MacroButton
        action="SetInputText"
        message={text}
        title="type"
        sid={sid}
      />
    </label>
  </li>
);

const HelloFlex = ({ task }) => {
  let chanSid = "";
  try {
    chanSid = TaskHelper.getTaskChatChannelSid(task);
  } catch (err) {
    return (
      <HelloFlexComponentStyles>
        <h1>I'm not in a conversation.</h1>
      </HelloFlexComponentStyles>
    );
  }

  const macros = [
    { id: 1, text: "macro 1" },
    { id: 2, text: "macro 2" },
  ];

  return (
    <HelloFlexComponentStyles>
      <ul>
        {macros.map((m) => (
          <Macro macro={m} sid={chanSid} />
        ))}
      </ul>
    </HelloFlexComponentStyles>
  );
};

export default HelloFlex;
