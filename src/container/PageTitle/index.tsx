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


const PageHeader: React.FC<PageTitleProps> = ({ imageUrl, auther, date, title, subTitle }) => {
  return <FlexView
    fill="#f5f5f5"
    direction="column"
    gap="40px"
    paddingVertical="40px"
    paddingHorizontal="30px"
  >

    <FlexView direction="column">
      <Text align="center" size="42px">{title}</Text>
      <Text align="center" size="18px">{subTitle}</Text>
    </FlexView>

    <FlexView
      align="flex-end"
      gap="10px"
      justify="space-between"
      wrap="wrap"
    >

      <div style={{ color: "#555" }} >
        <FlexView align="center" gap="10px" wrap="wrap">
          <Button size="15px" title="203" className="ri-eye-2-line" />  &bull;
        <Button size="15px" title="20" className="ri-thumb-up-line" /> &bull;
        <Button size="15px" title="93 " className="ri-message-line" />
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

export default PageHeader;
