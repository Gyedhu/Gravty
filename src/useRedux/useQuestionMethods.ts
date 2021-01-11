import { useDispatch } from "react-redux";
import { setQuestion } from "../redux/question/action";
import { QuestionProps } from "../redux/question/type";

const useQuestioMethods = () => {

  // dispatch
  const dispatch = useDispatch();

  // set method in state;
  const storeQuestions = (questions: Array<QuestionProps>) => {
    dispatch(setQuestion(questions));
  }

  return { storeQuestions };

}

export default useQuestioMethods;
