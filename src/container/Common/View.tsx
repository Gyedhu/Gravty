import React from "react";
import { FlexView } from "../../components";

interface Props {
  fill?: Fill;
  type?: "small" | "medium" | "big";
  smallGap?: boolean,
  shadow?: boolean;
  sticky?: boolean;
  noPadding?: boolean;
};

const View: React.FC<Props> = ({ fill, noPadding, type, smallGap, shadow, sticky, children }) => {
  return <FlexView fill={fill ? fill : "#ffffff"} justify="center" paddingHorizontal={noPadding ? "10px" : "25px"} paddingVertical={noPadding ? "10px" : "20px"} shadow={shadow} sticky={sticky}>
    <FlexView
      bound={type === "small" ? "400px" : type === "medium" ? "750px" : "1024px"}
      direction="column"
      gap={smallGap ? "10px" : "30px"}
    >
      {children}
    </FlexView>
  </FlexView>
}

export default View;
