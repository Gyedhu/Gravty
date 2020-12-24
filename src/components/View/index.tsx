import React from "react";
import {
  Container,
  InnerContainer
} from "./style";

const View: React.FC = ({ children }) => {
  return <Container>
    <InnerContainer>
      {children}
    </InnerContainer>
  </Container>
}

export default View;
