import React from "react";
import { HelloFlexComponentStyles } from "./HelloFlex.Styles";

const HelloFlex = (props) => {
  const message = props.isInChat
    ? "I'm in a chat right now."
    : "I'm wating for a chat to begin.";

  return (
    <HelloFlexComponentStyles>
      <h1>Hello, Flex!</h1>
    </HelloFlexComponentStyles>
  );
};

export default HelloFlex;
