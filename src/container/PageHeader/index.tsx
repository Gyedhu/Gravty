import React from "react";
import { Content, Text } from "../../components";
import ImageNText from "../ImageNText";

const PageHeader: React.FC<PageHeaderTypes> =

  ({ title, profileImageUrl, description, auther, date }) =>

    <Content>
      <Text align="center" size="40px">{title}</Text>
      {description && <Text align="center" size="18px" >{description}</Text>}
      <br />
      <ImageNText url={profileImageUrl} titles={[`${auther}`, date]} />
      <Text underline />
      <br />
    </Content>

export default PageHeader;
