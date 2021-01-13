import React, { memo, useEffect } from "react";

// Containers
import {
  ButtonBar,
  ProfileDisplayCard,
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
    {/* <ProfileNavigation /> */}

    <ButtonBar
      filled
      selectType="normal"
      buttonType="icon"
      leftSide={[
        "ri-add-line, write/question",
        "ri-message-line, message",
        "ri-search-2-line, search",
        "ri-upload-cloud-2-line, upload-list/questions",
        "ri-team-line, team"
      ]}

      rightSide={[
        "ri-settings-2-line",
        "ri-menu-line"
      ]}
    />

    {/* Profile Display Card */}
    <ProfileDisplayCard />

  </View>

}


export default memo(Profile);

