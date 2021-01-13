import firebase from "firebase";

import { QuestionActionsTypes, QuestionState, REMOVE_QUESTION, SET_QUESTION } from "./type";

const initialState: QuestionState = {
  questions: [
    {
      auther: "Yedhumohanan.G",
      comments: 1,
      content: "What is computer",
      likes: 20,
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      id: "slfjslkdjf",

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

