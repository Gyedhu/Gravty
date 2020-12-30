import React from "react";
import { useDispatch } from "react-redux"; 
import { HomeCard, HomeNavBar, ProfileCard, View } from "../../container";
import { setUserData } from "../../redux/userdata/action";

const Home = () => {

  // Get dispatch function
  const dispatch = useDispatch();

  // Set user data 
  React.useEffect(() => {
    dispatch(setUserData({
      imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      name: "Cristian Justin",
      email: "cri@gmail.com",
      friends: 20,
      profession: "Animator",
      stars: 2,
      uploads: 32
    }));
  }, [dispatch]);

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
