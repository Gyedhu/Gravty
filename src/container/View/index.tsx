import React from "react";
import { FlexView } from "../../components";

const View: React.FC = ({ children }) => {
  return <FlexView justify="center" paddingHorizontal="20px" paddingVertical="30px">
    <FlexView bound="400px" direction="column" gap="30px">
      {children}
    </FlexView>
  </FlexView>
}

export default View;
