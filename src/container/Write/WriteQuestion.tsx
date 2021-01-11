import React from "react";

// components
import { FlexView, Text } from "../../components";

// container
import QuestionWriteBox from "../QuestionWriteBox";

// firebase
import { useUploadDatabaseMethods } from "../../firebase";

// redux

// types

const WriteQuestion = () => {


  // Upload method
  const { uploadQuestion } = useUploadDatabaseMethods();

  // --- Upload ---
  const _uploadQuestion =
    (data: string, file?: File | null, callback?: () => void) => {
      uploadQuestion(data, file, callback);
    }

  return <FlexView direction="column" popup>

    <Text size="18px">
      Write your question and upload in internet for share to the world...
    </Text>
    <Text size="18px">
      As a testing phase, you can only upload 5 question
    </Text>

    <QuestionWriteBox onSubmit={_uploadQuestion} />
  </FlexView>
}

export default WriteQuestion;
