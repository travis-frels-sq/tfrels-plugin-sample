import React from "react";
import { HelloFlexComponentStyles } from "./HelloFlex.Styles";
import { Actions, TaskHelper } from "@twilio/flex-ui";

const HelloFlex = (props) => {
  const chanSid = TaskHelper.getTaskChatChannelSid(props.task);
  const macros = ["macro 1", "macro 2"];
  return (
    <HelloFlexComponentStyles>
      <ul>
        {macros.map((m) => (
          <li>
            <label>
              {m}&nbsp;&nbsp;
              <button
                onClick={() => {
                  Actions.invokeAction("SendMessage", {
                    body: m,
                    channelSid: chanSid,
                  });
                }}
              >
                message
              </button>
              <button
                onClick={() => {
                  Actions.invokeAction("SetInputText", {
                    body: m,
                    channelSid: chanSid,
                  });
                }}
              >
                input
              </button>
            </label>
          </li>
        ))}
      </ul>
    </HelloFlexComponentStyles>
  );
};

export default HelloFlex;
