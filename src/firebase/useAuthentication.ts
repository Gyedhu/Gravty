import firebase from "firebase/app";
import "firebase/auth";

// Redux
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setNotification } from "../redux/notification/action";
import { setUserData } from "../redux/userData/action";
import { UserDataState } from "../redux/userData/type";
import useFetchData from "./useFetchData";
import usePushData from "./usePushData";

const useAuthentication = () => {

  // Dispatch
  const dispatch = useDispatch();

  // history for change route
  const history = useHistory();

  // Fetch data methods
  const { fetchFrom } = useFetchData();
  const { pushTo } = usePushData();

  // --- Notification ---
  const notification = (message: string) => {
    dispatch(setNotification(message));
  }

  // --- store user data ---
  const storeUserData = (data: UserDataState) => {
    dispatch(setUserData(data));
  }

  // --- Signin --- 
  const signin = async (email: string, password: string) => {
    try {
      notification("Loading...");

      // Signing in...
      await firebase.auth().signInWithEmailAndPassword(email, password);

      // Fetch use data
      const path = `global-users/${email}`;
      const userData = await fetchFrom(path) as UserDataState
      userData["email"] = email;

      // store
      storeUserData(userData);

      // Success message
      notification("Signin success!");

      // Change  route
      history.push("/");

    } catch (error) {

      notification(error.message);
    } finally {

      // Close notification 
      setTimeout(() => notification(""), 2000);
    }
  }

  // Signup   
  interface UserData {
    email: string;
    name: string;
    password: string;
    profession: string;
  };
  const signup = async (data: UserData) => {

    const { email, password } = data;
    let userData: UserDataState = {
      ...data,
      friends: 0,
      uploads: 0,
      stars: 0
    };

    notification("Loading...");
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      notification("Please wait...");
      await pushTo(userData, `global-users/${email}/`);
      notification("Account created successfull");
    } catch (error) {
      notification(error.message);
    }
  }

  return { signin, signup };

}

export default useAuthentication;