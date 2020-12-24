import React from "react";
import {
  InnerContainer,
  Logo,
  NavigationContainer,
  ProfileImage
} from "./style";

import logo from "../../assets/images/logo.svg";

const Navigation = () => {
  return <NavigationContainer>
    <InnerContainer>

      <Logo>
        <img src={logo} alt="logo" />
        <div>Gravty</div>
      </Logo>

      <ProfileImage
        url="https://images.unsplash.com/photo-1515835854292-afb3d11ec326?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
      />

    </InnerContainer>
  </NavigationContainer>
}

export default Navigation
