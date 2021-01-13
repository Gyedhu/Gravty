import React from "react";
import { FlexView, Text } from "../../components";
import { CommentProps } from "../../redux/question/type";
import TextWithImageTemplate from "./TextWithImageTemplate";

const CommentTemplate: React.FC<CommentProps> =
  ({ auther, content, timestamp, email, id, imageUrl }) => {
    return <FlexView
      direction="column"
      gap="20px"
      paddingHorizontal="20px"
      paddingVertical="20px"
      shadow
    >

      <TextWithImageTemplate
        border
        url={imageUrl}
        title={auther}
        subTitle={email}
      />

      <Text>{content}</Text>
      <Text size="15px"> Uploaded : {timestamp.toDate().toLocaleString()} </Text>

    </FlexView>
  }

export default CommentTemplate;
