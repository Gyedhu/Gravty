import firebase from "firebase";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// components
import { Button, FlexView, Text } from "../../components";
import { useDeleteQuestion } from "../../firebase";
import { setImageDisplayUrl } from "../../redux/imageDisplay/action";
import { QuestionProps } from "../../redux/question/type";
import CommentTemplate from "../Common/CommentTemplate";

interface Props extends QuestionProps {
  delay?: number;
};

const QuestionTemplate: React.FC<Props> = ({ delay, id, imageUrl, content, likes, timestamp, comments }) => {

  const [showComments, setShowComments] = useState(false);

  const removeQuestion = useDeleteQuestion();

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
      paddingHorizontal="15px"
    >

      {/* Question */}
      <Text> {content} </Text>
      <FlexView align="center" gap="15px" justify="space-between" wrap="wrap">

        {/* Buttons */}
        <FlexView gap="10px">
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

      {
        comments > 0 &&
        <FlexView>
          <Button
            shadow
            onClick={() => setShowComments(prev => !prev)}
            className={showComments ? "ri-arrow-drop-up-line" : "ri-arrow-drop-down-line"}
            size="15px"
            title={(showComments ? "Hide" : "Show") + " comments"}
          />
        </FlexView>
      }

      {
        showComments && <>
          <CommentTemplate
            auther="Cristain Justjin"
            email="justin@gmail.com"
            content="Computer is a device"
            imageUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            timestamp={firebase.firestore.Timestamp.fromDate(new Date())}
          />

          <CommentTemplate
            auther="Cristain Justjin"
            email="justin@gmail.com"
            content="Computer is a device"
            imageUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            timestamp={firebase.firestore.Timestamp.fromDate(new Date())}
          />

          <CommentTemplate
            auther="Cristain Justjin"
            email="justin@gmail.com"
            content="Computer is a device"
            imageUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            timestamp={firebase.firestore.Timestamp.fromDate(new Date())}
          />
        </>
      }

    </FlexView>
  </FlexView >
}

export default QuestionTemplate;
