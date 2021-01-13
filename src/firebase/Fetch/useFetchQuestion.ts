import { useCallback, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Redux
import { useNotification } from "../../useRedux";

// types
import { QuestionProps } from "../../redux/question/type";
import { useQuestionMethods } from "../../useRedux";

export default function useFetchQuestion() {

  const [email, setemail] = useState<string | null>(null);
  const { pushNotification, popNotification } = useNotification();
  const { setQuesitonList } = useQuestionMethods();

  useEffect(() => {

    const { currentUser } = firebase.auth();

    if (currentUser) {
      if (currentUser.email) {
        setemail(currentUser.email);
      }
    }

  }, []);


  const fetchQuestions = useCallback(
    async () => {

      if (email) {

        pushNotification("Fetching your questions");

        try {
          const response = await firebase.firestore()
            .collection("questions")
            .where("auther", "==", email)
            .get();

          if (response.empty) {
            pushNotification("No question uploaded so far!", 2);
          } else {

            const questions: Array<QuestionProps> = [];

            response.forEach((doc) => {
              questions.push({
                id: doc.id,
                ...doc.data()
              } as QuestionProps);
            })

            setQuesitonList(questions);
            popNotification();
          }
        } catch (error) {
          pushNotification(error.message, 2);
        }
      }

    }, [pushNotification, popNotification, email, setQuesitonList]);

  return fetchQuestions;

}