import React from 'react'
import { Logo } from '../../assets/images'
import { Button, FlexView, Text } from '../../components'

const Navigation = () => {
  return <FlexView
    fill="#f5f5f5"
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
      justify="space-between"
    >

      {/* Logo */}
      <FlexView gap="10px">
        <img src={Logo} alt="logo" height="30" />
        <Text fancy>Gravty</Text>
      </FlexView>

      {/* Nav Icons */}
      <FlexView gap="20px">
        <Button className="ri-notification-line" />
        <Button className="ri-home-2-line" to="/" />
      </FlexView>

    </FlexView>

  </FlexView>
}

export default Navigation;
