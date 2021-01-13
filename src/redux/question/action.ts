import { AnswerProps, QuestionProps, RemoveQuestion, REMOVE_QUESTION, SetAnswer, SetQuestion, SET_ANSWER, SET_QUESTION } from "./type";

export const setQuestion = (payload: Array<QuestionProps>): SetQuestion => ({
  type: SET_QUESTION,
  payload
});

export const removeQuestion = (payload: string): RemoveQuestion => ({
  type: REMOVE_QUESTION,
  payload
});

export const setAnswer = (payload: { id: string; answer: Array<AnswerProps> }): SetAnswer => ({
  type: SET_ANSWER,
  payload: { ...payload }
});
