import React from "react";

// Components
import {
  FlexView,
  Text
} from "../../components";

interface Props {
  title: string;
  subTitle?: string;
  center?: boolean;
};

const Header: React.FC<Props> = ({ center, title, subTitle }) => {
  return <FlexView direction="column" paddingVertical="30px">
    <Text align={center ? "center" : undefined} size="30px">{title}</Text>
    <Text align={center ? "center" : undefined} size="18px">{subTitle}</Text>
  </FlexView>
}

export default Header;
