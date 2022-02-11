import React from "react";
import { Actions, TaskHelper } from "@twilio/flex-ui";
import styled from "react-emotion";

const MacroListStyles = styled("ul")`
  margin: 10px;
`;

const MacroStyles = styled("li")`
  margin: 10px;
  color: white;
`;

const NoConvoStyles = styled("p")`
  margin: 10px;
  font-size: 12pt;
  font-weight: bold;
  color: white;
`;

const macros = [
  { id: 1, text: "I'm sorry, but I can't help you with that." },
  { id: 2, text: "Thank-you for contacting me. Have a nice day!" },
];

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
  <MacroStyles key={id}>
    <label>
      <MacroButton action="SendMessage" message={text} title="send" sid={sid} />
      <MacroButton
        action="SetInputText"
        message={text}
        title="type"
        sid={sid}
      />
      &nbsp;|&nbsp;
      {text}
    </label>
  </MacroStyles>
);

const MacroList = ({ task }) => {
  try {
    const sid = TaskHelper.getTaskChatChannelSid(task);
    return (
      <MacroListStyles>
        {macros.map((m) => (
          <Macro macro={m} sid={sid} />
        ))}
      </MacroListStyles>
    );
  } catch (err) {
    return <NoConvoStyles>I'm not in a conversation.</NoConvoStyles>;
  }
};

export default MacroList;
