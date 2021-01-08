import firebase from "firebase";
import "firebase/auth";

// Redux
import { useDispatch } from "react-redux";
import { setNotification } from "../redux/notification/action";
import { setUserData } from "../redux/userData/action";
import { UserDataState } from "../redux/userData/type";
import useFetchData from "./useFetchData";


const useGetUserData = () => {

  // Dispatch
  const dispatch = useDispatch();

  // Fetch data methods
  const { fetchFrom } = useFetchData();

  // --- Notification ---
  const notification = (message: string) => {
    dispatch(setNotification(message));
  }

  // --- store user data ---
  const storeUserData = (data: UserDataState) => {
    dispatch(setUserData(data));
  }

  const getData = async () => {

    const { currentUser } = firebase.auth();
    try {
      // Fetch user data
      if (currentUser) {
        notification("Fetching your account information");
        const path = `global-users/${currentUser.email}`;
        const userData = await fetchFrom(path) as UserDataState

        // store
        storeUserData(userData);
      }
    } catch (error) {
      notification(error.message);
    } finally {
      setTimeout(() => notification(""), 2000);
    }
  }
  return { getData };

}

export default useGetUserData;
