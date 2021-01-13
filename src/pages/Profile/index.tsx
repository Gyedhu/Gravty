import React, { memo, useEffect } from "react";

// Containers
import {
  ProfileDisplayCard,
  ProfileNavigation,
  ProfileTitle,
  View
} from "../../container";

// firebase
import { useFetchUserData } from "../../firebase";

const Profile = () => {

  // Fetch use data method
  const { getData } = useFetchUserData();

  // fetch user data
  useEffect(getData, [getData]);

  return <View type="medium">

    {/* Profile Title */}
    <ProfileTitle />

    {/* Profile Navigation */}
    <ProfileNavigation />

    {/* Profile Display Card */}
    <ProfileDisplayCard />

  </View>

}


export default memo(Profile);

