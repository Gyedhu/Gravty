import React from "react";

// components
import { FlexView, Text } from "../../components";

// container
import { WriteQuestionTextArea } from "..";

// firebase
import { useUploadQuestions } from "../../firebase";


const WriteQuestion = () => {

  // Upload method 
  const { uploadQuestion } = useUploadQuestions();

  return <FlexView direction="column" popup>

    <Text size="18px">
      Write your question and upload in internet for share to the world...
    </Text>
    <Text size="18px">
      As a testing phase, you can only upload 5 question
    </Text>

    {/* Write Area */}
    <WriteQuestionTextArea onSubmit={uploadQuestion} />
  </FlexView>
}

export default WriteQuestion;
