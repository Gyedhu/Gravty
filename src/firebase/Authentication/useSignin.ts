import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router-dom";
import { useNotification } from "../../useRedux";

export default function useSignin() {

  // history for change route
  const history = useHistory();

  // --- Notification ---
  const { pushNotification } = useNotification();


  const signin = async (email: string, password: string) => {
    try {
      pushNotification("Loading...");

      // Signing in...
      await firebase.auth().signInWithEmailAndPassword(email, password);

      // Change  route
      history.replace("/profile");

      pushNotification("Welcome", 2);

    } catch (error) {
      pushNotification(error.message, 2);
    }
  }

  return signin;

}