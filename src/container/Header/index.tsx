import React from "react";
import { FlexView, Text } from "../../components";

interface Props {
  title: string;
  subTitle: string;
};

const Header: React.FC<Props> = ({ title, subTitle }) => {
  return <FlexView direction="column">
    <Text size="30px">{title}</Text>
    <Text size="18px">{subTitle}</Text>
  </FlexView>
}

export default Header;
