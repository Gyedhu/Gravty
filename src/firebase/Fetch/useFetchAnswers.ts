import firebase from "firebase/app";
import "firebase/firestore";
import { useSelector } from "react-redux";
import { AnswerProps } from "../../redux/question/type";
import { State } from "../../redux/store";
import { useNotification } from "../../useRedux";
import useAnswerMethods from "../../useRedux/useAnswerMethods";

export default function useFetchAnswers() {

  const { pushNotification, popNotification } = useNotification();
  const { storeAnswer } = useAnswerMethods();

  const answersList = useSelector<State, {
    [id: string]: Array<AnswerProps>;
  }>(state => state.question.answers);

  const fetchAnswers = async (id: string, callback?: () => void) => {


    if (answersList[id] === undefined)
      try {
        pushNotification("Loading answer, please wait");

        const response = await firebase.firestore()
          .collection("questions")
          .doc(id)
          .collection("answers")
          .limit(10)
          .get();

        if (response.empty) {
          pushNotification("No answer");
        } else {
          const newAnswers: Array<AnswerProps> = [];

          response.forEach(doc => {
            newAnswers.push({
              id: doc.id,
              ...doc.data()
            } as AnswerProps)
          });

          storeAnswer({
            id: id,
            answer: newAnswers
          });

          if (callback)
            callback();

          popNotification();
        }

      }
      catch (error) {
        pushNotification(error.message, 2);
      }
    else
      if (callback)
        callback()

  }

  return fetchAnswers;

}