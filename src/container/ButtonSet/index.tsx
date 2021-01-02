import React from 'react'
import { FlexView } from '../../components'

interface Props {
  leftSet: React.ReactNode;
  rightSet?: React.ReactNode;
}

const ButtonSet: React.FC<Props> = ({ leftSet, rightSet, children }) => {
  return <FlexView
    fill="#ffffff"
    gap="10px"
    paddingHorizontal="15px"
    paddingVertical="15px"
    radius="10px"
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
