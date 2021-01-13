import React from "react";
import { FlexView } from "../../components";

interface Props {
  leftSet: React.ReactNode;
  rightSet?: React.ReactNode;
};

const ButtonSet: React.FC<Props> = ({ leftSet, rightSet }) => {


  return <FlexView
    delay={.2}
    fill="#59886b"
    gap="10px"
    justify="space-between" wrap="wrap"
    paddingHorizontal="25px"
    popup
    paddingVertical="15px"
    radius="40px"
    shadow
  >
    {
      leftSet && <FlexView gap="25px" mobile={!rightSet}>
        {leftSet}
      </FlexView>
    }

    {
      rightSet && <FlexView gap="25px" mobile={!leftSet}>
        {rightSet}
      </FlexView>
    }

  </FlexView>
}

export default ButtonSet;
