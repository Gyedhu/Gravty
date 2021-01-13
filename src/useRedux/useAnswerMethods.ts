import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setAnswer } from "../redux/question/action";
import { AnswerProps } from "../redux/question/type";

export default function useAnswerMethods() {

  const dispatch = useDispatch();

  const storeAnswer = useCallback((payload: { id: string; answer: Array<AnswerProps> }) => {
    dispatch(setAnswer(payload));
  }, [dispatch]);

  return { storeAnswer };

}
