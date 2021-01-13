import React from "react";
import { FlexView, Text, TextArea } from "../../components";
import { AnswerProps } from "../../redux/question/type";
import TextWithImageTemplate from "./TextWithImageTemplate";

const AnswerTemplate: React.FC<AnswerProps> =
  ({ auther, content, timestamp, email, imageUrl }) => {
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

      <TextArea readOnly value={content} />
      <Text size="15px"> Uploaded : {timestamp.toDate().toLocaleString()} </Text>

    </FlexView>
  }

export default AnswerTemplate;
