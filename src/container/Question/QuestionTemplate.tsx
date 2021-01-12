import React, { useState } from "react";
import { useDispatch } from "react-redux";

// components
import { Button, FlexView, Text } from "../../components";
import { useUploadDatabaseMethods } from "../../firebase";
import { setImageDisplayUrl } from "../../redux/imageDisplay/action";
import { QuestionProps } from "../../redux/question/type";

// container
import TextWithImageTemplate from "../Common/TextWithImageTemplate";

interface Props extends QuestionProps {
  delay?: number
};

const QuestionTemplate: React.FC<Props> = ({ delay, id, commentCount, imageUrl, content, likes, timestamp, views, comments }) => {

  const [showComments, setShowComments] = useState(false);

  const { removeQuestion } = useUploadDatabaseMethods();

  const remove = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    removeQuestion(event.currentTarget.value, Boolean(imageUrl));
  }

  // dispatch
  const dispatch = useDispatch();

  const viewImage = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    dispatch(setImageDisplayUrl(event.currentTarget.src));
  }

  return <FlexView
    fill="#ffffff"
    direction="column"
    gap="50px"
    paddingVertical="20px"
    popup
    shadow
    delay={delay}
  >

    {
      imageUrl &&
      <img onClick={viewImage} src={imageUrl} alt="template" width="100%" />
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
          <Button className="ri-share-line" />
          <Button value={`${id}`} onClick={remove} className="ri-delete-bin-3-line" />
        </FlexView>
      </FlexView>

      <FlexView>
        <Button
          shadow
          onClick={() => setShowComments(prev => !prev)}
          className={showComments ? "ri-arrow-drop-up-line" : "ri-arrow-drop-down-line"}
          size="15px"
          title={(showComments ? "Hide" : "Show") + " comments"}
        />
      </FlexView>

    </FlexView>

    {
      showComments &&
      comments &&
      <FlexView
        direction="column"
        gap="30px"
        paddingHorizontal="10px"
        paddingVertical="10px"
      >
        {
          comments.map((value, index) =>
            <FlexView
              key={index}
              direction="column"
              gap="15px"
              paddingHorizontal="20px"
              paddingVertical="20px"
            >
              <TextWithImageTemplate
                border={true}
                title={value.auther}
                subTitle={value.email}
                url={value.imageUrl}
              />

              <Text alignJustify size="18px"> {value.content} </Text>
              <FlexView
                align="center"
                gap="15px"
                justify="space-between"
                wrap="wrap"
              >
                <Text size="15px"> Uploaded : {value.timestamp.toDate().toLocaleString()} </Text>
              </FlexView>
            </FlexView>
          )
        }
      </FlexView>
    }
  </FlexView>
}

export default QuestionTemplate;
