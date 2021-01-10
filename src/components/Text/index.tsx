import React from "react";
import { TextContainer } from "./style";

const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <TextContainer {...props}>
    {children && <span> {children}</span>}
  </TextContainer>
}

export default Text;
