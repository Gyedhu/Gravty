import React from "react";

// components
import { Button, FlexView, Text } from "../../components";
import { useUploadsDatabaseMethods } from "../../firebase";
import { QuestionProps } from "../../redux/question/type";

const QuestionTemplate: React.FC<QuestionProps> = ({ id, comments, imageUrl, content, likes, timestamp, views }) => {

  const { removeQuestion } = useUploadsDatabaseMethods();

  const reset = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    removeQuestion(event.currentTarget.value, Boolean(imageUrl));
  }

  return <FlexView
    fill="#ffffff"
    direction="column"
    gap="30px"
    paddingVertical="20px"
    popup
    shadow
  >

    {
      imageUrl &&
      <img src={imageUrl} alt="template" width="100%" />
    }

    <FlexView
      direction="column"
      gap="30px"
      paddingHorizontal="20px"
    >

      {/* Question */}
      <Text> {content} </Text>
      <FlexView align="center" gap="15px" justify="space-between" wrap="wrap">

        {/* Buttons */}
        <FlexView gap="10px">
          <Button size="15px" title={`${views} Views`} />
          <FlexView border />
          <Button size="15px" title={`${likes} Likes`} />
          <FlexView border />
          <Button size="15px" title={`${comments} Comments`} />
        </FlexView>

        <Text size="15px"> Uploaded : {timestamp.toDate().toLocaleString()} </Text>

        <FlexView gap="20px" justify="flex-end">
          <Button className="ri-pencil-line" />
          <Button className="ri-share-line" />
          <Button value={`${id}`} onClick={reset} className="ri-delete-bin-3-line" />
        </FlexView>

      </FlexView>
    </FlexView>
  </FlexView>
}

export default QuestionTemplate;
