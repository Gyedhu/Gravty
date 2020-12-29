import React from "react";
import { FlexView, UrlImage, Text } from "../../components";

interface UserDataProps {
  imageUrl?: string;
  name: string;
  email: string;
  profession: string;
}

const UserData: React.FC<UserDataProps> =
  ({ email, imageUrl, name, profession }) => {

    return <FlexView
      align="center"
      gap="20px"
      justify="space-between"
      paddingVertical="20px"
      wrap="wrap"
      mobile
    >
      {imageUrl && <UrlImage border rounded url={imageUrl} height="100px" width="100px" />}

      <FlexView direction="column" justify="center" mobile>
        <Text size="24px">{name}</Text>
        <Text size="15px">{email}</Text>
        <Text size="15px">{profession}</Text>
      </FlexView>
    </FlexView>
  }

interface DashboardProps {
  uploads: number;
  friends: number;
  stars: number;
}

const Dashboard: React.FC<DashboardProps> = ({ uploads, friends, stars }) => {
  return <FlexView gap="30px" mobile>

    <FlexView direction="column">
      <Text align="center" size="30px">{uploads}</Text>
      <Text align="center" size="15px">Uploads</Text>
    </FlexView>

    <FlexView direction="column">
      <Text align="center" size="30px">{friends}</Text>
      <Text align="center" size="15px">Friends</Text>
    </FlexView>

    <FlexView direction="column">
      <Text align="center" size="30px">{stars}</Text>
      <Text align="center" size="15px">Stars</Text>
    </FlexView>

  </FlexView>
}

interface ProfileCardProps extends UserDataProps, DashboardProps { };

const ProfileCard: React.FC<ProfileCardProps> =
  ({ email, friends, imageUrl, name, profession, stars, uploads }) => {
    return <FlexView
      align="center"
      justify="space-between"
      wrap="wrap"
    >
      <UserData
        email={email}
        imageUrl={imageUrl}
        name={name}
        profession={profession}
      />
      <Dashboard
        friends={friends}
        stars={stars}
        uploads={uploads}
      />

    </FlexView>
  }

export default ProfileCard
