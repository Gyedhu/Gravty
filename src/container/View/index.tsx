import React from "react";
import { FlexView } from "../../components";

interface Props {
  type?: "small" | "medium" | "big";
  smallGap?: boolean,
  shadow?: boolean;
  sticky?: boolean;
};

const View: React.FC<Props> = ({ type, smallGap, shadow, sticky, children }) => {
  return <FlexView fill="#ffffff" justify="center" paddingHorizontal="20px" paddingVertical="20px" shadow={shadow} sticky={sticky}>
    <FlexView
      fill="#ffffff"
      bound={type === "small" ? "400px" : type === "medium" ? "750px" : "1024px"}
      direction="column"
      gap={smallGap ? "10px" : "30px"}
    >
      {children}
    </FlexView>
  </FlexView>
}

export default View;
