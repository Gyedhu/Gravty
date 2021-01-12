import React from "react";

// Components
import {
  FlexView,
  Text
} from "../../components";

interface Props {
  bold?: boolean;
  center?: boolean;
  fancy?: boolean;
  title: string;
  subTitle?: string;
};

const Header: React.FC<Props> = ({ bold, center, fancy, title, subTitle }) => {
  return <FlexView
    direction="column"
    paddingVertical="30px"
  >
    <Text align={center ? "center" : undefined} bold={bold} size="36px">{title}</Text>
    <Text align={center ? "center" : undefined} fancy={fancy} size="18px">{subTitle}</Text>
  </FlexView>
}

export default Header;
