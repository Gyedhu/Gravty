import React from "react";
import firebase from "firebase/app";

// Components
import { FlexView, Text } from "../../components";

// Containers
import { QuestionWriteBox } from "..";
import { useUploadDatabaseMethods } from "../../firebase";
import { useSelector } from "react-redux";
import { UserDataState } from "../../redux/userData/type";
import { State } from "../../redux/store";

const WriteQuestion = () => {

  // Upload method
  const { uploadQuestion } = useUploadDatabaseMethods();
  const { email } = useSelector<State, UserDataState["data"]>(state => state.userData.data);

  const _uploadQuestion =
    (
      data: string,
      file?: File | null,
      callback?: () => void
    ) => {

      const newQuestion = {
        auther: email,
        content: data,
        commentCount: 0,
        likes: 0,
        views: 0,
        timestamp: firebase.firestore.Timestamp.fromDate(new Date())
      }

      uploadQuestion(newQuestion, file, callback);
    }

  // --- Write question --- 
  return <FlexView direction="column" popup>

    <Text size="18px">Write your question and upload in internet for share to the world...</Text>
    <Text size="18px">As a testing phase, you can only upload 5 question</Text>

    <QuestionWriteBox onSubmit={_uploadQuestion} />
  </FlexView>
}

export default WriteQuestion;