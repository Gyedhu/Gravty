import { useCallback, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { QuestionProps } from "../../redux/question/type";
import useUploadImage from "./useUploadImage";
import { useNotification, useUserDataMethods } from "../../useRedux";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { UserDataState } from "../../redux/userData/type";

interface QuestionData {
  auther: string;
  timestamp: firebase.firestore.Timestamp;
  answers: number;
  likes: number;
  id: string;
};

export default function useFetchQuestion() {

  const [questionData, setQuestionData] = useState<QuestionData | null>(null);
  const { uploadImage } = useUploadImage();
  const { pushNotification } = useNotification();
  const { incrementUploads } = useUserDataMethods();

  const { uploads } = useSelector<State, UserDataState["data"]>(state => state.userData.data);

  useEffect(() => {

    const { currentUser } = firebase.auth();

    if (currentUser) {
      if (currentUser.email) {

        const newQuestionData: QuestionData = {
          auther: currentUser.email,
          answers: 0,
          likes: 0,
          id: "",
          timestamp: firebase.firestore.Timestamp.fromDate(new Date())
        };

        setQuestionData(newQuestionData);
      }
    } else {
      pushNotification("You can't upload", 2);
    }

  }, [pushNotification]);

  const uploadQuestion = useCallback(
    async (data: string, file?: File | null, callback?: () => void) => {

      if (data.trim() !== "") {
        try {

          if (questionData !== null) {

            pushNotification("Uploading question");

            // Create new question
            const newQuestion: QuestionProps = {
              content: data,
              ...questionData
            };

            // uploading question to the path 'questions
            // Get the id
            const { id } = await firebase.firestore()
              .collection("questions")
              .add(newQuestion);

            // Upload image
            if (file) {
              const url = await uploadImage(`${firebase.auth().currentUser?.uid}/${id}`, file);

              await firebase.firestore()
                .collection("questions")
                .doc(`${id}`)
                .set({ imageUrl: url }, { merge: true });
            }

            // increment uplaods number
            await firebase.firestore()
              .collection("global-users")
              .doc(questionData.auther)
              .update({
                uploads: uploads + 1
              });

            incrementUploads();

            pushNotification("Upload success", 2);

            if (callback)
              callback();

          }
        } catch (error) {
          pushNotification(error.message, 2);
        }
      } else {
        pushNotification("Write something!", 1);
      }
    }, [questionData, uploads, uploadImage, incrementUploads, pushNotification]);


  return { uploadQuestion };

}