import React from "react";
import firebase from "firebase/app";

// Components
import { FlexView, Text } from "../../components";

// Containers
import { QuestionWriteBox } from "..";
import { useUploadsDatabaseMethods } from "../../firebase";
import { useSelector } from "react-redux";
import { UserDataState } from "../../redux/userData/type";
import { State } from "../../redux/store";

const WriteQuestion = () => {

  // Upload method
  const { uploadQuestion } = useUploadsDatabaseMethods();
  const { email } = useSelector<State, UserDataState>(state => state.userData);

  const _uploadQuestion =
    async (
      data: string,
      file?: File | null,
      callback?: () => void
    ) => {
      if (email)
        uploadQuestion({
          auther: email,
          content: data,
          comments: 0,
          likes: 0,
          views: 0,
          timestamp: firebase.firestore.Timestamp.fromDate(new Date())
        }, file, callback);
    }

  // --- Write question --- 
  return <FlexView direction="column" popup>

    <Text size="18px">Write your question and upload in internet for share to the world...</Text>
    <Text size="18px">As a testing phase, you can only upload 5 question</Text>

    <QuestionWriteBox onSubmit={_uploadQuestion} />
  </FlexView>
}

export default WriteQuestion;