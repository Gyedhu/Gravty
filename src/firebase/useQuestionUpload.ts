import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useDispatch } from "react-redux";
import { setNotification } from "../redux/notification/action";
import { QuestionProps } from "../redux/question/type";
import useUploadImage from "./useUploadImage";

const usePushQuestions = () => {

  // Dispatch
  const dispatch = useDispatch();
  const { uploadImage } = useUploadImage();

  // --- Notification ---
  const notification = (message: string) => {
    dispatch(setNotification(message));
  }

  const uploadQuestion =
    async (
      data: QuestionProps,
      file?: File | null,
      callback?: () => void
    ) => {

      try {
        notification("Uploading question");
        const { currentUser } = firebase.auth();

        if (currentUser?.email) {

          // Get email and uid
          const { uid } = currentUser;

          // Upload data and get the id
          const { id } = await firebase.firestore()
            .collection("questions")
            .add(data);
          // .doc(email)
          // .collection("questions")
          // .add(data);

          notification("Please wait...");

          // Upload image 
          if (file) {

            // Get url 
            const url = await uploadImage(`${uid}/${id}`, file);
            await firebase.firestore()
              .collection("questions")
              .doc(id)
              .set({ imageUrl: url }, { merge: true });
          }

          notification("Upload success");
          if (callback)
            callback()
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
