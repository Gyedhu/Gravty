import firebase from "firebase/app";
import "firebase/auth";

// Redux
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setNotification } from "../redux/notification/action";
import { clearUserData } from "../redux/userData/action";
import { UserDataState } from "../redux/userData/type";
import useGetUserData from "./useGetUserData";
import usePushData from "./usePushData";

const useAuthentication = () => {

  // Dispatch
  const dispatch = useDispatch();

  // history for change route
  const history = useHistory();

  // Fetch data methods 
  const { pushTo } = usePushData();
  const { getData } = useGetUserData();

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

      // Get use Data
      getData();

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

    const { email, name, profession, password } = data;
    let userData: UserDataState = {
      email,
      name,
      profession,
      friends: 0,
      uploads: 0,
      stars: 1
    };

    notification("Loading...");
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      notification("Please wait...");
      await pushTo(`global-users/${email}/`, userData);
      notification("Account created successfull");
      history.replace("/select-image");
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