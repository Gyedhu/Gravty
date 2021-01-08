import React from 'react'
import { FlexView } from '../../components'

interface Props {
  leftSet: React.ReactNode;
  rightSet?: React.ReactNode;
}

const ButtonSet: React.FC<Props> = ({ leftSet, rightSet }) => {
  return <FlexView
    fill="#59886b"
    gap="10px"
    justify="space-between" wrap="wrap"
    paddingHorizontal="15px"
    paddingVertical="15px"
    radius="30px"
    shadow
  >
    {leftSet && <FlexView gap="10px" mobile={!rightSet}>
      {leftSet}
    </FlexView>}

    {rightSet && <FlexView gap="10px" mobile={!leftSet}>
      {rightSet}
    </FlexView>}
  </FlexView>
}

export default ButtonSet
