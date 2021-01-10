import firebase from "firebase";
import "firebase/auth";

// Redux
import { useDispatch } from "react-redux";
import { useNotification } from "../hook";
import { setUserData } from "../redux/userData/action";
import { UserDataState } from "../redux/userData/type";
import useFetchData from "./useFetchData";


const useGetUserData = () => {

  // Dispatch
  const dispatch = useDispatch();

  // --- Notification ---
  const { popNotification, pushNotification } = useNotification();

  // Fetch data methods
  const { fetchFrom } = useFetchData();

  // --- store user data ---
  const storeUserData = (data: UserDataState) => {
    dispatch(setUserData(data));
  }

  const getData = async () => {

    const { currentUser } = firebase.auth();
    try {
      // Fetch user data
      if (currentUser) {
        pushNotification("Fetching your account information");
        const path = `global-users/${currentUser.email}`;
        const userData = await fetchFrom(path) as UserDataState

        // store
        storeUserData(userData);
      }
    } catch (error) {
      pushNotification(error.message, 2);
    } finally {
      popNotification();
    }
  }
  return { getData };

}

export default useGetUserData;
