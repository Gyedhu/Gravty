import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeQuestion, setQuestion } from "../redux/question/action";
import { QuestionProps } from "../redux/question/type";

export default function useQuestionRedux() {

  const dispatch = useDispatch();

  // add a question
  const setQuesitonList = useCallback((questions: Array<QuestionProps>) => {
    dispatch(setQuestion(questions));
  }, [dispatch]);

  // remove question
  const removeQuestionFromList = useCallback((id: string) => {
    dispatch(removeQuestion(id));
  }, [dispatch]);

  return { setQuesitonList, removeQuestionFromList };
}