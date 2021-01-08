import React from 'react'
import { FlexView } from '../../components'

interface Props {
  leftSet: React.ReactNode;
  rightSet?: React.ReactNode;
}

const ButtonSet: React.FC<Props> = ({ leftSet, rightSet }) => {
  return <FlexView
    radius="30px"
    fill="#ffffff"
    gap="10px"
    paddingHorizontal="15px"
    paddingVertical="15px"
    shadow
    justify="space-between" wrap="wrap"
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
