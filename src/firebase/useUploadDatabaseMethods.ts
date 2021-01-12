import { useCallback } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Redux - 
import { useNotification } from "../useRedux";
import { QuestionProps } from "../redux/question/type";

// Use Redux
import useQuestioMethods from "../useRedux/useQuestionMethods";
import useQuestionRedux from "../useRedux/useQuestionsRedux";

// firebase costum hook methods
import useUploadImage from "./useUploadImage";


const useUploadsDatabaseMethods = () => {

  // notification
  const { pushNotification } = useNotification();

  // Redux methods
  const { storeQuestions } = useQuestioMethods();
  const { removeQuestionFromList } = useQuestionRedux();

  // Database methods
  const { uploadImage } = useUploadImage();

  // upload question
  const uploadQuestion = async (
    data: string,
    file?: File | null,
    callback?: () => void
  ) => {

    try {
      pushNotification("Uploading question");

      // current user
      const { currentUser } = firebase.auth();

      // Check the current user is available
      if (!currentUser) {
        pushNotification("Push failed", 2);
        return
      }
      // Check the email is available or not
      if (!currentUser.email) {
        pushNotification("Push failed", 2);
        return;
      }

      // Get uid
      const { uid } = currentUser;

      // --- Upload user info--- 

      const newQuestion: QuestionProps = {
        auther: currentUser.email,
        commentCount: 0,
        content: data,
        likes: 0,
        timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
        views: 0,
        comments: [],
      };


      // Upload data to 'questions/',
      // and get the id
      const { id } = await firebase.firestore()
        .collection("questions")
        .add(newQuestion);

      // Image upload
      pushNotification("Please wait...");

      // --- Upload image --- 
      // Cheking the image file is given
      if (file) {

        // Get url 
        const url = await uploadImage(`${uid}/${id}`, file);

        // Store image url in database
        await firebase.firestore()
          .collection("questions")
          .doc(id)
          .set({ imageUrl: url }, { merge: true });
      }

      // --- Total success --- 
      pushNotification("Upload success", 2);

      // Calling callback
      if (callback) callback();

    } catch (error) {
      // --- Error message --- 
      pushNotification(error.message, 2);
    }
  }

  // fetch questions
  const fetchQuestion = useCallback(async () => {

    // Declare a vaiable
    let questions: Array<QuestionProps> = [];

    try {
      const { currentUser } = firebase.auth();

      // Checking the current user
      if (!currentUser) {
        pushNotification("Fetch failed", 2);
        return;
      }

      if (!currentUser.email)
        return

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
        storeQuestions(questions);
      }

      pushNotification("Question are loaded successfully", 2);


    } catch (error) {
      pushNotification(error.message, 2);
    }
  }, [pushNotification, storeQuestions]);

  // remove question
  const removeQuestion = async (id: string, haveImage: boolean) => {

    try {

      pushNotification("Please wait...");

      const { currentUser } = firebase.auth();

      if (!currentUser) {
        pushNotification("Removed failed", 2);
        return;
      }

      await firebase.firestore()
        .collection("questions")
        .doc(id)
        .delete();

      if (haveImage) {
        await firebase.storage().ref(`${currentUser.uid}/${id}`).delete();
      }

      removeQuestionFromList(id);

      pushNotification("Question removed...", 2);
    }
    catch (error) {
      pushNotification(error.message, 2);
    }
  }

  return { fetchQuestion, removeQuestion, uploadQuestion };

}

export default useUploadsDatabaseMethods;
