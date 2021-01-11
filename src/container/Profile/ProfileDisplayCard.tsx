import React from "react";
import { Desktop, Mobile, Writer } from "../../assets/images";
import { FlexView, UrlImage, Text } from "../../components";


// Card with image

interface CardProps {
  delay?: number;
  imageUrl: string;
  title: string;
  subTitle: string;
};

const Card: React.FC<CardProps> = ({ imageUrl, delay, title, subTitle }) => {
  return <FlexView
    direction="column"
    fill="#ffffff"
    gap="20px"
    delay={delay}
    grow="1"
    paddingHorizontal="20px"
    paddingVertical="20px"
    radius="5px"
    popup
  >
    {imageUrl && <UrlImage fit={true} height="150px" url={imageUrl} />}

    <FlexView direction="column" maxWidth="150px">
      <Text size="20px">{title}</Text>
      <Text size="15px">{subTitle}</Text>
    </FlexView>

  </FlexView>
}

const ProfileDisplayCard = () => {
  return <FlexView
    gap="20px"
    wrap="wrap"
  >
    <Card
      delay={.3}
      imageUrl={Writer}
      subTitle="Write your question, ideas and thoughts"
      title="Write"
    />

    <Card
      delay={.35}
      imageUrl={Mobile}
      subTitle="Chat with your friends and share resources"
      title="Chat"
    />

    <Card
      delay={.4}
      imageUrl={Desktop}
      subTitle="Search and find resources"
      title="Search"
    />
  </FlexView>
}

export default ProfileDisplayCard;
