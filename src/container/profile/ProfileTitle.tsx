import React, { useEffect } from "react";

// Containers
import {
  ImageCard,
  HomeNavBar,
  ProfileCard,
  View
} from "..";

// firebase
import { useGetUserData } from "../../firebase";



// Home
const Home = () => {

  const { getData } = useGetUserData();

  useEffect(() => {

    // Fetch use data
    getData();
  }, [getData]);

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
