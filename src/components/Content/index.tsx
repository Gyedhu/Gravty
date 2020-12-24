import React from "react";
import { ContentContainer } from "./style";

const Content: React.FC<ContentTypes> = ({ children, ...props }) => {
  return <ContentContainer {...props}>
    {children}
  </ContentContainer>
}

export default Content;
