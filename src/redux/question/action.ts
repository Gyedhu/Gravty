import { QuestionProps, RemoveQuestion, REMOVE_QUESTION, SetQuestion, SET_QUESTION } from "./type";

export const setQuestion = (payload: Array<QuestionProps>): SetQuestion => ({
  type: SET_QUESTION,
  payload
});

export const removeQuestion = (payload: string): RemoveQuestion => ({
  type: REMOVE_QUESTION,
  payload
});
