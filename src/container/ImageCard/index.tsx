import React from "react";
import { Desktop, Mobile, Writer } from "../../assets/images";
import { FlexView, Text, UrlImage } from "../../components";

interface CardProps {
  imageUrl: string;
  title: string;
  subTitle: string;
};

// Card with image
const Card: React.FC<CardProps> = ({ imageUrl, title, subTitle }) => {
  return <FlexView
    direction="column"
    gap="20px"
    grow="1"
    minWidth="200px"
  >
    {imageUrl && <UrlImage fit={true} height="200px" url={imageUrl} />}

    <FlexView direction="column" maxWidth="300px">
      <Text size="20px">{title}</Text>
      <Text size="15px">{subTitle}</Text>
    </FlexView>

  </FlexView>
}

//  Card set
const ImageCard = () => {
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
      subTitle="Search and find resources and help people by with answer their questions"
      title="Search"
    />

  </FlexView>
}

export default ImageCard
