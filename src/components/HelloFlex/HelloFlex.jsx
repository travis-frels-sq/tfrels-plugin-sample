import React from "react";
import { HelloFlexComponentStyles } from "./HelloFlex.Styles";

// It is recommended to keep components stateless and use redux for managing states
const HelloFlex = (props) => {
  return (
    <HelloFlexComponentStyles>
      <p>Hello, Flex!</p>
    </HelloFlexComponentStyles>
  );
};

HelloFlex.displayName = "HelloFlex";

HelloFlex.propTypes = {};

export default HelloFlex;
