import firebase from "firebase/app";
import "firebase/firestore";
import { QuestionActionsTypes, QuestionState, REMOVE_QUESTION, SET_QUESTION } from "./type";

const initialState: QuestionState = {
  questions: [
    {
      id: "kdhwieilslcks",
      auther: "Yedhumohanan.G",
      content: "What is the best programming language i should learn",
      comments: 20,
      likes: 28,
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      views: 208,
    }
  ],
};

export default function reducer(state = initialState, action: QuestionActionsTypes): QuestionState {

  switch (action.type) {

    case SET_QUESTION:
      return {
        ...state,
        questions: action.payload
      };

    case REMOVE_QUESTION:

      const newQuestions = state.questions.filter(
        value => value.id !== action.payload
      )

      return {
        ...state,
        questions: newQuestions
      };

    default:
      return state;

  }
}

