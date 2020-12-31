import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Logo } from "../../assets/images";
import { Button, FlexView, Text } from "../../components";
import { clearUserData } from "../../redux/userdata/action";
import View from "../View";

const Navigation = () => {

  // Dispatch
  const dispatch = useDispatch();
  const history = useHistory();


  // --- Logout ---
  const logout = () => {

    // Clear the user data from state;
    dispatch(clearUserData());
    history.replace("/signin");
  }


  return <View shadow>
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
        <Button className="ri-logout-circle-line" onClick={logout} />
      </FlexView>
    </FlexView>
  </View >
}

export default Navigation;
