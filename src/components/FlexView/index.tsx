import React from "react";
import { FlexViewContainer } from "./style";

const FlexView: React.FC<FlexView> = ({ children, ...props }) => {
  return <FlexViewContainer {...props}>
    {children}
  </FlexViewContainer>
}

export default FlexView;
