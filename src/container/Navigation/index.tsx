import React from 'react'
import { Logo } from '../../assets/images'
import { FlexView, Text } from '../../components'

const Navigation = () => {
  return <FlexView
    fill="#ffffff"
    justify="center"
    paddingHorizontal="20px"
    paddingVertical="20px"
    shadow
    sticky
  >
    <FlexView
      align="center"
      bound="1024px"
      gap="5px"
    >

      <img src={Logo} alt="logo" height="30" />
      <Text fancy>Gravty</Text>

    </FlexView>
  </FlexView>
}

export default Navigation;
