import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Redux
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setNotification } from "../redux/notification/action";
import { clearUserData } from "../redux/userData/action";
import { UserDataState } from "../redux/userData/type";
import useGetUserData from "./useGetUserData";
import { useNotification } from "../useRedux";

const useAuthentication = () => {

  // Dispatch
  const dispatch = useDispatch();

  // history for change route
  const history = useHistory();

  const { getData } = useGetUserData();

  // --- Notification ---
  const { popNotification, pushNotification } = useNotification();

  // --- Signin --- 
  const signin = async (email: string, password: string) => {
    try {
      pushNotification("Loading...");

      // Signing in...
      await firebase.auth().signInWithEmailAndPassword(email, password);

      // Get use Data
      getData();

      // Change  route
      history.replace("/");

    } catch (error) {

      pushNotification(error.message, 2);
    } finally {
      // Close notification 
      popNotification();
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
      stars: 1,
    };

    try {
      pushNotification("Loading...");
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      pushNotification("Please wait...");

      // Set use data in database
      await firebase.firestore()
        .collection("global-users")
        .doc(email)
        .set(userData);

      pushNotification("Account created successfull");
      history.replace("/select-image");
    } catch (error) {
      pushNotification(error.message, 2);
    }
    finally {
      popNotification();
    }
  }

  // Signout
  const signout = async () => {
    setNotification("Signing out...");
    await firebase.auth().signOut();
    popNotification();
    dispatch(clearUserData());
    history.replace("/signin");
  }

  return { signin, signup, signout };

}

export default useAuthentication;