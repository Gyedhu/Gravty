import React, { useEffect } from "react";

// Containers
import {
  ImageCard,
  HomeNavBar,
  ProfileCard,
  View
} from "../../container";
import { useGetUserData } from "../../firebase";

const Home = () => {

  const { getData } = useGetUserData();

  useEffect(() => {
    getData();
  }, []);

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
