import React from "react";

// Components
import {
  FlexView,
  Text,
  UrlImage
} from "../../components";

interface TextWithImageProps {
  url?: string;
  title: string;
  subTitle: string;
}

const TextWithImage: React.FC<TextWithImageProps> = ({ url, title, subTitle }) =>
  <FlexView gap="10px" paddingVertical="30px">
    {url && <UrlImage rounded url={url ? url : ""} height="50px" width="50px" />}
    <FlexView direction="column">
      <Text size="18px">{title}</Text>
      <Text size="15px">{subTitle}</Text>
    </FlexView>
  </FlexView>

interface Props {
  imageUrl?: string;
  auther: string;
  date: string;
  title: string;
  subTitle?: string;
}

const PageHeader: React.FC<Props> = ({ imageUrl, auther, date, title, subTitle }) => {
  return <FlexView direction="column" paddingVertical="20px" paddingHorizontal="20px">
    <Text align="center" size="42px">{title}</Text>
    <Text align="center" size="18px">{subTitle}</Text>
    <TextWithImage
      url={imageUrl}
      title={auther}
      subTitle={date}
    />
  </FlexView>
}

export default PageHeader;
