import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Redux 
import { useHistory } from "react-router-dom";
import { UserDataState } from "../../redux/userData/type";
import { useNotification } from "../../useRedux";

export default function useSignup() {

  // history for change route
  const history = useHistory();

  // --- Notification ---
  const { popNotification, pushNotification } = useNotification();

  // Signup   
  interface UserData {
    email: string;
    name: string;
    password: string;
    profession: string;
  };

  const signup = async (data: UserData) => {

    const { email, name, profession, password } = data;
    let userData: UserDataState["data"] = {
      email,
      name,
      profession,
      friends: 0,
      uploads: 0,
      stars: 1,
    };

    try {
      pushNotification("Loading...");

      // signing up....
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      pushNotification("Please wait...");

      // Set use data in database
      await firebase.firestore()
        .collection("global-users")
        .doc(email)
        .set(userData);

      pushNotification("Account created successfull");

      // change route
      history.replace("/select-image");
    } catch (error) {
      pushNotification(error.message, 2);
    }
    finally {
      popNotification();
    }
  }

  return signup;
}; 