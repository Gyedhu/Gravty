import React from "react";
import { Desktop, Mobile, Writer } from "../../assets/images";
import { FlexView, Text, UrlImage } from "../../components";

interface CardProps {
  imageUrl: string;
  title: string;
  subTitle: string;
};

const Card: React.FC<CardProps> = ({ imageUrl, title, subTitle }) => {
  return <FlexView
    direction="column"
    gap="20px"
    grow="1"
    minWidth="200px"
  >
    {imageUrl && <UrlImage fit height="200px" url={imageUrl} />}

    <FlexView direction="column" maxWidth="300px">
      <Text size="20px">{title}</Text>
      <Text size="15px">{subTitle}</Text>
    </FlexView>

  </FlexView>
}

const HomeCard = () => {
  return <FlexView
    gap="10px"
    wrap="wrap"
  >
    <Card
      imageUrl={Writer}
      subTitle="Write your question, ideas and thoughts"
      title="Write"
    />

    <Card
      imageUrl={Mobile}
      subTitle="Chat with your friends and share resources"
      title="Chat"
    />

    <Card
      imageUrl={Desktop}
      subTitle="Search and frind resources and help peoples with answer questions"
      title="Search"
    />

  </FlexView>
}

export default HomeCard
