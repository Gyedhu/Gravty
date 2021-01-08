import firebase from "firebase/app";
import "firebase/firestore";
import usePushData from "./usePushData";
import { useDispatch } from "react-redux";
import { setNotification } from "../redux/notification/action";

interface QuestionType {
  content: string;
  timestamp: Date;
  imageFile?: FileList | null;
};

const usePushQuestions = () => {

  // Dispatch
  const dispatch = useDispatch();

  // --- Notification ---
  const notification = (message: string) => {
    dispatch(setNotification(message));
  }

  const { AddDataWithKey, pushInArray } = usePushData();

  const addQuestion = async (data: QuestionType) => {

    try {
      notification("Uploading question");

      const id = await AddDataWithKey(`questions/`, data);
      notification("Please wait...");

      const { currentUser } = firebase.auth();

      if (currentUser)
        await pushInArray(
          `global-users/${currentUser.email}/`,
          "questions",
          id as string
        );

      notification("Upload succes");
    } catch (error) {
      alert(error.message);
      notification(error.message);
    } finally {
      setTimeout(() => notification(""), 2000);
    }
  }

  return { addQuestion };

}

export default usePushQuestions;
