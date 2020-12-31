import React from "react";
import { User } from "../../assets/images";
import { FlexView, Text, UrlImage } from "../../components";

const TextWidthImage = () =>
  <FlexView gap="10px">
    <UrlImage rounded url={User} height="50px" width="50px" />
    <FlexView direction="column">
      <Text size="18px">Yedhumohanan.G</Text>
      <Text size="15px">{new Date().toDateString()}</Text>
    </FlexView>
  </FlexView>

const PageHeader = () => {
  return <FlexView direction="column">
    <Text align="center" size="42px">Header</Text>
    <Text align="center" size="24px">Subheader</Text>
    <TextWidthImage />
  </FlexView>
}

export default PageHeader;
