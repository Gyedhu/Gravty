import React from 'react'
import { FlexView } from '../../components'

interface Props {

}

const ButtonSet: React.FC<Props> = ({ children }) => {
  return <FlexView
    fill="#ffffff"
    gap="10px"
    paddingHorizontal="15px"
    paddingVertical="15px"
    radius="10px"
    shadow
    justify="space-between" wrap="wrap"
  >
  {children}
  </FlexView>
}

export default ButtonSet
