import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useNotification } from "../hook";

// type
import { QuestionProps } from "../redux/question/type";
import useQuestioMethods from "../hook/useQuestionMethods";
import useQuestionRedux from "../hook/useQuestionsRedux";

const useUploadsDatabaseMethods = () => {

  // notification
  const { pushNotification } = useNotification();

  // Store question
  const { storeQuestions } = useQuestioMethods();
  const { removeQuestionFromList } = useQuestionRedux();


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

  return { fetchQuestion, removeQuestion };

}

export default useUploadsDatabaseMethods;
