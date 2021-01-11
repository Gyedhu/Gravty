import React, { useEffect } from "react";
import { User } from "../../assets/images";

// Containers
import {
  ProfileDisplayCard,
  ProfileNavigation,
  ProfileTitle,
  View
} from "../../container";
import { useUserDataMethods } from "../../useRedux";


const Profile = () => {

  // useData methods
  const { storeUserData } = useUserDataMethods();

  const fetchUser = () => {
    setTimeout(() => {
      storeUserData({
        email: "Yedhu@gmail.com",
        friends: 20,
        name: "Yedhumohanan.G",
        profession: "Fullstack developer",
        stars: 3,
        uploads: 23,
        imageUrl: User
      })
    }, 2000);
  }

  // fetch user data
  useEffect(fetchUser, []);

  return <View type="medium">

    {/* Profile Title */}
    <ProfileTitle />

    {/* Profile Navigation */}
    <ProfileNavigation />

    {/* Profile Display Card */}
    <ProfileDisplayCard />

  </View>

}


export default Profile;

