import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useDispatch } from "react-redux";
import { setNotification } from "../redux/notification/action";
import { QuestionState } from "../redux/question/type";
import useUploadImage from "./useUploadImage";

const usePushQuestions = () => {

  // Dispatch
  const dispatch = useDispatch();
  const { upload } = useUploadImage();

  // --- Notification ---
  const notification = (message: string) => {
    dispatch(setNotification(message));
  }

  const uploadQuestion = async (data: QuestionState, file?: File | null) => {

    try {
      notification("Uploading question");
      const { currentUser } = firebase.auth();

      if (currentUser) {

        const { email, uid } = currentUser;

        if (email) {

          const { id } = await firebase.firestore()
            .collection("question")
            .doc(email)
            .collection("data")
            .add(data);

          notification("Please wait...");

          if (file) {
            const url = await upload(`${uid}/${id}`, file);
            await firebase.firestore()
              .collection("question")
              .doc(email)
              .collection("data")
              .doc(id)
              .set({ imageUrl: url }, { merge: true });
          }

        }
      }

    } catch (error) {
      // --- Error message --- 
      notification(error.message);
    }
    finally {
      setTimeout(() => notification(""), 2000);
    }
  }

  return { uploadQuestion };

}

export default usePushQuestions;
