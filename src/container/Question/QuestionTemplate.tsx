import React, { useState } from "react";
import { useDispatch } from "react-redux";

// components
import { Button, FlexView, Text, TextArea } from "../../components";
import { useDeleteQuestion } from "../../firebase";
import { setImageDisplayUrl } from "../../redux/imageDisplay/action";
import { QuestionProps } from "../../redux/question/type";
import AnswerList from "../Answer/AnswerList";

interface Props extends QuestionProps {
  delay?: number;
};

const QuestionTemplate: React.FC<Props> = ({ delay, id, imageUrl, content, likes, timestamp, answers }) => {

  const [showAnswer, setShowAnswers] = useState(false);

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
      <TextArea value={content} type="dashed" readOnly />
      <FlexView align="center" gap="15px" justify="space-between" wrap="wrap">

        {/* Buttons */}
        <FlexView gap="10px">
          <Button size="15px" title={`${likes} Likes`} />
          <FlexView border />
          <Button size="15px" title={`${answers} answers`} />
        </FlexView>

        <Text size="15px"> Uploaded : {timestamp.toDate().toLocaleString()} </Text>

        <FlexView gap="20px" justify="flex-end">
          <Button className="ri-share-line" />
          <Button value={`${id}`} onClick={remove} className="ri-delete-bin-3-line" />
        </FlexView>
      </FlexView>

      {
        answers > 0 &&
        <FlexView>
          <Button
            shadow
            onClick={() => setShowAnswers(prev => !prev)}
            className={showAnswer ? "ri-arrow-drop-up-line" : "ri-arrow-drop-down-line"}
            size="15px"
            title={(showAnswer ? "Hide" : "Show") + " Answers"}
          />
        </FlexView>
      }

      {
        showAnswer && <>
          {
            <AnswerList id={id} />
          }
        </>
      }

    </FlexView>
  </FlexView >
}

export default QuestionTemplate;
