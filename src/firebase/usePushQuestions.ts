import firebase from "firebase/app";
import "firebase/firestore";
import usePushData from "./usePushData";
import { useDispatch } from "react-redux";
import { setNotification } from "../redux/notification/action";
import useUploadImage from "./useUploadImage";

interface QuestionType {
  content: string;
  timestamp: Date;
  imageFile?: Blob | null;
};

const usePushQuestions = () => {

  // Dispatch
  const dispatch = useDispatch();
  const { upload } = useUploadImage();

  // --- Notification ---
  const notification = (message: string) => {
    dispatch(setNotification(message));
  }

  const { AddDataWithKey, pushInArray } = usePushData();

  const uploadQuestion = async (data: QuestionType) => {

    try {

      notification("Uploading question");
      const { currentUser } = firebase.auth();

      // Datas to be uploaded
      const { content, timestamp, imageFile } = data;
      let url: string | null = null;

      // Get the current user
      if (currentUser) {

        // Upload attached image file in storage
        // And get the url
        if (imageFile)
          url = await upload(`global-users/${currentUser.uid}`, imageFile) as string;

        // Store the question and image url and other information to the firestore
        // Get the question's firestore id
        const id = await AddDataWithKey(`questions/`, {
          content,
          timestamp,
          imageUrl: url
        });
        notification("Please wait...");

        // Store the id in our account
        await pushInArray(
          `global-users/${currentUser.email}/`,
          "questions",
          id as string
        );

        notification("Upload succes");
      }
      else
        notification("Error while upload");
    } catch (error) {
      notification(error.message);
    } finally {
      setTimeout(() => notification(""), 2000);
    }
  }

  return { uploadQuestion };

}

export default usePushQuestions;
