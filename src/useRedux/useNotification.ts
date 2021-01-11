import { useDispatch } from "react-redux";
import { setNotification } from "../redux/notification/action";

const useNotification = () => {

  const dispatch = useDispatch();

  // set notification
  const notification = (message?: string) => {
    dispatch(setNotification(message));
  }

  // popdown
  const popNotification = () => {
    notification();
  }

  // popup
  const pushNotification = async (message: string, limit?: number) => {
    notification(message);

    // notification will popdown after given time
    if (limit) {
      await new Promise(resolve => setTimeout(resolve, limit * 1000));
      popNotification();
    }
  }

  return { pushNotification, popNotification };

}

export default useNotification;