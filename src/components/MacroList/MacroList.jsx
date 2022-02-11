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

const InfoStyles = styled("p")`
  margin: 10px;
  font-size: 12pt;
  font-weight: bold;
  color: white;
`;

const ErrorStyles = styled("p")`
  margin: 10px;
  font-size: 12pt;
  font-weight: bold;
  color: red;
`;

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

const MacroList = ({ task, macros }) => {
  if (!task) {
    return <InfoStyles>I am not in a conversation.</InfoStyles>;
  }

  if (!macros) {
    return <InfoStyles>There are no macros.</InfoStyles>;
  }

  try {
    const chatChannelSid = TaskHelper.getTaskChatChannelSid(task);
    return (
      <MacroListStyles>
        {macros.map((m) => (
          <Macro key={m.id} macro={m} sid={chatChannelSid} />
        ))}
      </MacroListStyles>
    );
  } catch (err) {
    console.log("macro list error: ", err);
    return <ErrorStyles>There was an error. See the console.</ErrorStyles>;
  }
};

export default MacroList;
