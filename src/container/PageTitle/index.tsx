import React from "react";

// Containers
import { TextWithImageTemplate } from "..";

// Components
import {
  Button,
  FlexView,
  Text
} from "../../components";

// types
import { PageTitleProps } from "../../types/pageElements"


const PageTitle: React.FC<PageTitleProps> = ({ imageUrl, auther, date, title, subTitle }) => {

  // alert(auther)

  return <FlexView
    fill="#f5f5f5"
    direction="column"
    gap="40px"
    paddingVertical="40px"
    paddingHorizontal="30px"
  >

    <FlexView direction="column">
      <Text align="center" size="40px">{title}</Text>
      <Text align="center" size="18px">{subTitle}</Text>
    </FlexView>

    <FlexView
      align="flex-end"
      gap="30px"
      justify="space-between"
      wrap="wrap"
    >

      <div style={{ color: "#555" }} >
        <FlexView align="center" gap="10px" wrap="wrap">
          <Button size="15px" title="203 Views" />  &bull;
          <Button size="15px" title="20 Likes" /> &bull;
          <Button size="15px" title="93 Comments" />
        </FlexView>
      </div>

      <TextWithImageTemplate
        url={imageUrl}
        title={auther}
        subTitle={date}
        side="left"
      />

    </FlexView>
  </FlexView >
}

export default PageTitle;
