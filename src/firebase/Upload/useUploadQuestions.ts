import { useCallback, useEffect, useState } from "react";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { QuestionProps } from "../../redux/question/type";
import useUploadImage from "../useUploadImage";
import { useNotification } from "../../useRedux";

interface QuestionData {
  auther: string;
  timestamp: firebase.firestore.Timestamp;
  comments: number;
  views: number;
  likes: number;
};

export default function useUploadQuestions() {

  const [questionData, setQuestionData] = useState<QuestionData | null>(null);
  const { uploadImage } = useUploadImage();
  const { pushNotification } = useNotification();

  useEffect(() => {

    const { currentUser } = firebase.auth();

    if (currentUser) {
      if (currentUser.email) {

        const newQuestionData: QuestionData = {
          auther: currentUser.email,
          comments: 0,
          views: 0,
          likes: 0,
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
        if (questionData !== null) {

          pushNotification("Upload questions");

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

          pushNotification("Upload success", 2);

          if (callback)
            callback();

        }
      } else {
        pushNotification("Write something!", 1);
      }
    }, [questionData, uploadImage, pushNotification]);


  return { uploadQuestion };

}