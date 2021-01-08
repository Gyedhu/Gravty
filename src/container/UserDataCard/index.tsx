import React from "react";
import { useSelector } from "react-redux";
import { FlexView, UrlImage, Text } from "../../components";
import { State } from "../../redux/store";
import { UserDataState } from "../../redux/userData/type";


// Dashcard
const DashCard: React.FC<{ title: string; value: number }> = ({ title, value }) =>
  <FlexView align="center" direction="column" popup>
    <Text>{value}</Text>
    <Text size="15px">{title}</Text>
  </FlexView >


const UserData = () => {

  // Get user data from state
  const { imageUrl, name, email, profession, uploads, friends, stars } = useSelector<State, UserDataState>(state => state.userData);

  return <FlexView
    align="center"
    gap="20px"
    justify="space-between"
    paddingVertical="20px"
    wrap="wrap"
    mobile popup
  >

    {/* User image */}
    <UrlImage border rounded url={imageUrl ? imageUrl : ""} height="120px" width="120px" />

    {/* User info */}
    <FlexView direction="column">
      {
        name && email && profession &&
        <FlexView direction="column" popup mobile>
          <Text size="24px">{name}</Text>
          <Text size="15px">{email}</Text>
          <Text size="15px">{profession}</Text>
          <FlexView paddingVertical="5px" />
        </FlexView>
      }

      {/* Dashboard */}
      <FlexView gap="20px" mobile>
        <DashCard title="Uploads" value={uploads} />
        <DashCard title="Stars" value={stars} />
        <DashCard title="Friends" value={friends} />
      </FlexView>

    </FlexView>
  </FlexView>
}


export default UserData;
