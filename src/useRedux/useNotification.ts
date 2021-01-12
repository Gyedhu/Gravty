import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setNotification } from "../redux/notification/action";

const useNotification = () => {

  const dispatch = useDispatch(); 

  
  // popdown
  const popNotification = useCallback(() => {
    dispatch(setNotification());
  }, [dispatch]);

  // popup
  const pushNotification = useCallback(async (message: string, limit?: number) => {

    dispatch(setNotification(message));

    // notification will popdown after given time
    if (limit) {
      await new Promise(resolve => setTimeout(resolve, limit * 1000));
      popNotification();
    }
  }, [dispatch, popNotification]);

  return { pushNotification, popNotification };

}

export default useNotification;