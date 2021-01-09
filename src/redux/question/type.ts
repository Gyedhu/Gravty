import firebase from "firebase/app";

export const SET_QUESTION = "SET_QUESTION";

export interface QuestionState {
  imageUrl?: string;
  content: string;
  views: number;
  comments: number;
  timestamp: firebase.firestore.Timestamp;
  likes: number;
};



