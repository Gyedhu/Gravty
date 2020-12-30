import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Logo } from "../../assets/images";
import { Button, FlexView, Text } from "../../components";
import { clearUserData } from "../../redux/userdata/action";

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
        <Button className="ri-logout-circle-line" onClick={logout} />
      </FlexView>

    </FlexView>

  </FlexView>
}

export default Navigation;
