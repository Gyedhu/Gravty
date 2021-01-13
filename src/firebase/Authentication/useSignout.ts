import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Redux 
import { useHistory } from "react-router-dom";
import { useNotification, useUserDataMethods } from "../../useRedux";
import { useCallback } from "react";

export default function useSignout() {

  // history for change route
  const history = useHistory();

  // --- Notification ---
  const { pushNotification } = useNotification();

  // --- User data methods ---
  const { resetUserData } = useUserDataMethods();

  // Signout
  const signout = useCallback(async () => {
    pushNotification("Signing out...");
    await firebase.auth().signOut();
    pushNotification("See you...", 2);
    resetUserData();
    history.replace("/signin");
  }, [pushNotification, history, resetUserData]);

  return signout;

}
