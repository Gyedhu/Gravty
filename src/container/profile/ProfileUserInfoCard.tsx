import React from "react";
import { useSelector } from "react-redux";

// components
import { FlexView, UrlImage, Text } from "../../components";

// Redux
import { State } from "../../redux/store";
import { UserDataState } from "../../redux/userData/type";



// Dashcard 

interface DashCardProps {
  title: string;
  value: Number;
};

const DashCard: React.FC<DashCardProps> = ({ title, value }) =>
  <FlexView
    align="center"
    direction="column"
    justify="flex-end"
    popup
  >
    <Text>{value}</Text>
    <Text size="15px">{title}</Text>
  </FlexView >



// UserInfoCard

const UserInfoCard = () => {

  // Get user data from state
  const {
    imageUrl,
    name,
    email,
    profession,
    uploads,
    friends,
    stars
  } = useSelector<State, UserDataState>(state => state.userData);

  return <FlexView
    align="center"
    gap="20px"
    justify="space-between"
    paddingVertical="20px"
    wrap="wrap"
    mobile popup
  >

    {/* User image */}
    <UrlImage
      border
      rounded
      url={imageUrl ? imageUrl : ""}
      height="150px"
      width="150px"
    />

    {/* User info */}
    <FlexView direction="column">
      {
        // Only show if the data is successfully fetched
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

export default UserInfoCard;

