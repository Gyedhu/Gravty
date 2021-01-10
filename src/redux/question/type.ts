import firebase from "firebase/app";

export const SET_QUESTION = "SET_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

// State
export interface QuestionProps {
  auther: string;
  id?: string | number;
  imageUrl?: string;
  content: string;
  views: number;
  comments: number;
  timestamp: firebase.firestore.Timestamp;
  likes: number;
};

export interface QuestionState {
  questions: Array<QuestionProps>;
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

export type QuestionActionsTypes = SetQuestion | RemoveQuestion;
