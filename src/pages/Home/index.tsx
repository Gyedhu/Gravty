import React from "react";

// Containers
import {
  ImageCard,
  HomeNavBar,
  ProfileCard,
  View
} from "../../container";

const Home = () => {

  return <View>

    {/* Profile Card */}
    <ProfileCard />

    {/* NavBar */}
    <HomeNavBar />

    {/* HomeCard */}
    <ImageCard />

  </View>
}

export default Home;
