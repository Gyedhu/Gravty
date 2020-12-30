import React from "react";
import { HomeCard, HomeNavBar, ProfileCard, View } from "../../container";

const Home = () => {

  return <View>

    {/* Profile Card */}
    <ProfileCard />

    {/* NavBar */}
    <HomeNavBar />

    {/* HomeCard */}
    <HomeCard />

  </View>
}

export default Home;
