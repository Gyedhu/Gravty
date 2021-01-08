import firebase from "firebase/app";
import "firebase/auth";

// Redux
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setNotification } from "../redux/notification/action";
import { clearUserData } from "../redux/userData/action";
import { UserDataState } from "../redux/userData/type";
import usePushData from "./usePushData";

const useAuthentication = () => {

  // Dispatch
  const dispatch = useDispatch();

  // history for change route
  const history = useHistory();

  // Fetch data methods 
  const { pushTo } = usePushData();

  // --- Notification ---
  const notification = (message: string) => {
    dispatch(setNotification(message));
  }

  // --- Signin --- 
  const signin = async (email: string, password: string) => {
    try {
      notification("Loading...");

      // Signing in...
      await firebase.auth().signInWithEmailAndPassword(email, password);

      // Change  route
      history.replace("/");

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
      history.push("/select-image");
    } catch (error) {
      notification(error.message);
    }
  }

  // Signout
  const signout = async () => {
    await firebase.auth().signOut();
    dispatch(clearUserData());
    history.replace("/signin");
  }

  return { signin, signup, signout };

}

export default useAuthentication;