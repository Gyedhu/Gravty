import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useNotification } from "../hook";

// type
import { QuestionProps } from "../redux/question/type";
import useQuestioMethods from "../hook/useQuestionMethods";
import useQuestionRedux from "../hook/useQuestionsRedux";
import useUploadImage from "./useUploadImage";

const useUploadsDatabaseMethods = () => {

  // notification
  const { pushNotification } = useNotification();

  // Store question
  const { storeQuestions } = useQuestioMethods();
  const { removeQuestionFromList } = useQuestionRedux();
  const { uploadImage } = useUploadImage();

  // upload question
  const uploadQuestion =
    async (
      data: QuestionProps,
      file?: File | null,
      callback?: () => void
    ) => {


      try {
        pushNotification("Uploading question");
        const { currentUser } = firebase.auth();

        if (currentUser?.email) {

          // Get email and uid
          const { uid } = currentUser;

          // Upload data and get the id
          const { id } = await firebase.firestore()
            .collection("questions")
            .add(data);

          pushNotification("Please wait...");

          // Upload image 
          if (file) {

            // Get url 
            const url = await uploadImage(`${uid}/${id}`, file);

            // Store url in database
            await firebase.firestore()
              .collection("questions")
              .doc(id)
              .set({ imageUrl: url }, { merge: true });
          }

          pushNotification("Upload success", 2);

          // Calling callback
          if (callback)
            callback()
        }

      } catch (error) {
        // --- Error message --- 
        pushNotification(error.message, 2);
      }
    }


  // fetch questions
  const fetchQuestion = async () => {

    // Declare a vaiable
    const questions: Array<QuestionProps> = [];

    try {
      const { currentUser } = firebase.auth();

      if (currentUser?.email) {
        // Loading message
        pushNotification("Fetching your question");

        // Fetching data
        const data = await firebase
          .firestore()
          .collection("questions")
          .where("auther", "==", currentUser.email)
          .get();

        // Checking the data is exist or not
        if (!data.empty) {
          data.forEach(doc =>
            questions.push(
              {
                id: doc.id,
                ...doc.data()
              } as QuestionProps)
          );
        }

        // If data is exixst
        if (questions.length) {
          // Store the data 
          console.log(questions)
          storeQuestions(questions);
        }

        pushNotification("Question are loaded successfully", 2);
      } else
        pushNotification("Fetch failed", 2);

    } catch (error) {
      pushNotification(error.message, 2);
    }
  }

  // remove question
  const removeQuestion = async (id: string, haveImage: boolean) => {

    try {

      pushNotification("Please wait...");

      const currentUser = firebase.auth().currentUser;

      if (currentUser?.email) {
        await firebase.firestore()
          .collection("questions")
          .doc(id)
          .delete();

        if (haveImage) {
          await firebase.storage().ref(`${currentUser.uid}/${id}`).delete();
        }

        removeQuestionFromList(id);

        pushNotification("Question removed...", 2);
      } else {
        pushNotification("Removed failed", 2);
      }

    }
    catch (error) {
      pushNotification(error.message, 2);
    }

  }

  return { fetchQuestion, removeQuestion, uploadQuestion };

}

export default useUploadsDatabaseMethods;
