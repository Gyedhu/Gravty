import { QuestionActionsTypes, QuestionState, REMOVE_QUESTION, SET_ANSWER, SET_QUESTION } from "./type";

const initialState: QuestionState = {
  questions: [],
  answers: {}
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

    case SET_ANSWER:
      return {
        ...state,
        answers: {
          [action.payload.id]: action.payload.answer
        }
      }

    default:
      return state;

  }
}

