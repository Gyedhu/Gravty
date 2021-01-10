import React from "react";

// Containers
import {
  ImageCard,
  HomeNavBar,
  ProfileCard,
  View
} from "../../container";

const Home = () => {

  return <View type="medium">

    {/* Profile Card */}
    <ProfileCard />

    {/* NavBar */}
    <HomeNavBar />

    {/* HomeCard */}
    <ImageCard />

  </View>
}

export default Home;
