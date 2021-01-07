import React from "react";
import { useSelector } from "react-redux";
import { FlexView, UrlImage, Text } from "../../components";
import { State } from "../../redux/store";
import { UserDataState } from "../../redux/userData/type";


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
    <UrlImage border rounded url={imageUrl ? imageUrl : ""} height="120px" width="120px" />

    {/* User info */}
    <FlexView direction="column" justify="center" mobile>
      <Text size="30px">{name}</Text>
      <Text size="15px">{email}</Text>
      <Text size="15px">{profession}</Text>
    </FlexView>
  </FlexView>
}


export default UserData;
