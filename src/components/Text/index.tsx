import React from "react";
import { TextContainer } from "./style";

const Text: React.FC<TextTypes> = ({ children, ...props }) => {
  return <TextContainer {...props}>
  {children}
  </TextContainer>
}

export default Text
