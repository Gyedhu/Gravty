import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setQuestion } from "../redux/question/action";
import { QuestionProps } from "../redux/question/type";

const useQuestioMethods = () => {

  // dispatch
  const dispatch = useDispatch();

  // set method in state;
  const storeQuestions = useCallback((questions: Array<QuestionProps>) => {
    dispatch(setQuestion(questions));
  }, [dispatch]);

  return { storeQuestions };

}

export default useQuestioMethods;
