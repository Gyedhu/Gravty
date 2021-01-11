import { useDispatch } from "react-redux";
import { removeQuestion, setQuestion } from "../redux/question/action";
import { QuestionProps } from "../redux/question/type";

export default function useQuestionRedux() {

  const dispatch = useDispatch();

  // add a question
  const setQuesitonList = (questions: Array<QuestionProps>) => {
    dispatch(setQuestion(questions));
  }

  // remove question
  const removeQuestionFromList = (id: string) => {
    dispatch(removeQuestion(id));
  }

  return { setQuesitonList, removeQuestionFromList };
}