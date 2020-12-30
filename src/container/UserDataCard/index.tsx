import React from "react";
import { useSelector } from "react-redux";
import { FlexView, UrlImage, Text } from "../../components";
import { State } from "../../redux/store";
import { UserDataState } from "../../redux/userdata/type";


const UserData = () => {

  // Get user data from state
  const { imageUrl, name, email, profession } = useSelector<State, UserDataState>(state => state.userData);

  return <FlexView
    align="center"
    gap="20px"
    justify="space-between"
    paddingVertical="20px"
    wrap="wrap"
    mobile
  >

    {/* User image */}
    <UrlImage border rounded url={imageUrl ? imageUrl : ""} height="100px" width="100px" />

    {/* User info */}
    <FlexView direction="column" justify="center" mobile>
      <Text size="24px">{name}</Text>
      <Text size="15px">{email}</Text>
      <Text size="15px">{profession}</Text>
    </FlexView>
  </FlexView>
}


export default UserData;
