import React from "react";
import { Logo } from "../../assets/images";
import { Button, FlexView, Text } from "../../components";
import { useSignout } from "../../firebase";
import { View } from "..";

const Navigation = () => {

  const signout = useSignout();

  return <View type="medium" shadow sticky>
    <FlexView justify="space-between">
      {/* Logo */}
      <FlexView gap="10px">
        <img src={Logo} alt="logo" height="30" />
        <Text fancy>Gravty</Text>
      </FlexView>

      {/* Nav Icons */}
      <FlexView gap="20px">
        <Button className="ri-notification-line" />
        <Button className="ri-home-2-line" to="/" />
        <Button className="ri-logout-circle-line" onClick={signout} />
      </FlexView>
    </FlexView>
  </View >
}

export default Navigation;
