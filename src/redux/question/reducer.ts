import firebase from "firebase";

import { QuestionActionsTypes, QuestionState, REMOVE_QUESTION, SET_QUESTION } from "./type";

const initialState: QuestionState = {
  questions: [
    {
      auther: "Yedhumohanan.G",
      answers: 1,
      content: `const initialState: QuestionState = {
        questions: [
          {
            auther: "Yedhumohanan.G",
            comments: 1,
            content: '',
            likes: 20,
            timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
            id: "slfjslkdjf",
      
          }
        ],
      };`,
      likes: 20,
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      id: "slfjslkdjf",
    }
  ],

  answers: {
    "slfjslkdjf": [
      {
        auther: "Cristian Justin",
        content: "There is a semicolon missing",
        timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
        email: "justin@gmail.com",
        id: "823498230492830948",
      },
      {
        auther: "Coran",
        content: `There is no problem with the syntax, 
But your logic is wrong`,
        timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
        email: "justin@gmail.com",
        id: "sdlfliwueliiu",
      },
    ]
  }
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

