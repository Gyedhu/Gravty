import React from "react";
import firebase from "firebase/app";

// Components
import { FlexView, Text } from "../../components";

// Containers
import { QuestionWriteBox } from "..";
import { usePushQuestions as useQuestionUpload } from "../../firebase";

const WriteQuestion = () => {

  // Upload method
  const { uploadQuestion } = useQuestionUpload();

  const _uploadQuestion = async (data: string, file?: File | null) => {
    uploadQuestion({
      content: data,
      comments: 0,
      likes: 0,
      views: 0,
      timestamp: firebase.firestore.Timestamp.fromDate(new Date())
    }, file);
  }

  // --- Write question --- 
  return <FlexView direction="column">

    <Text size="18px">Write your question and upload in internet for share to the world...</Text>
    <Text size="18px">As a testing phase, you can only upload 5 question</Text>

    <QuestionWriteBox onSubmit={_uploadQuestion} />
  </FlexView>
}

export default WriteQuestion;