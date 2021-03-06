import firebase from "firebase/app";

export const SET_QUESTION = "SET_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const SET_ANSWER = "SET_ANSWER";

// State
export interface AnswerProps {
  auther: string;
  email?: string;
  id?: string;
  imageUrl?: string;
  content: string;
  timestamp: firebase.firestore.Timestamp;
};

export interface QuestionProps {
  auther: string;
  id: string | "";
  imageUrl?: string;
  content: string;
  answers: number;
  timestamp: firebase.firestore.Timestamp;
  likes: number;
};


export interface QuestionState {
  questions: Array<QuestionProps>;
  answers: {
    [id: string]: Array<AnswerProps>;
  };
};


// Actions
export interface SetQuestion {
  type: typeof SET_QUESTION;
  payload: Array<QuestionProps>;
};

export interface RemoveQuestion {
  type: typeof REMOVE_QUESTION;
  payload: string;
};

export interface SetAnswer {
  type: typeof SET_ANSWER;
  payload: { id: string; answer: Array<AnswerProps> };
};

export type QuestionActionsTypes = SetQuestion | RemoveQuestion | SetAnswer;
