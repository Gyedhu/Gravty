import firebase from "firebase/app";
import "firebase/firestore";
import { QuestionActionsTypes, QuestionState, REMOVE_QUESTION, SET_QUESTION } from "./type";

const initialState: QuestionState = {
  questions: [
    {
      id: "kdhwieilslcks",
      auther: "Yedhumohanan.G",
      content: "What is the best programming language i should learn",
      commentCount: 20,
      likes: 28,
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      views: 208,
      comment: [
        {
          id: "sdweolruwehflksdjf",
          imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
          auther: "Cristian justin",
          email: "cristian@gmail.com",
          content: "Java, Javascript, c++, python",
          timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
        },

        {
          id: "sdweolruwehflksdjf",
          imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
          auther: "Cristian justin",
          email: "cristian@gmail.com",
          content: "Java, Javascript, c++, python",
          timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
        }
      ]
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

