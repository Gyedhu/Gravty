import firebase from "firebase";
import "firebase/firestore";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { useNotification } from "../hook";
import { State } from "../redux/store";
import { setUserData } from "../redux/userData/action";
import { UserDataState } from "../redux/userData/type";


const useGetUserData = () => {

  // Dispatch
  const dispatch = useDispatch();

  // --- Notification ---
  const { popNotification, pushNotification } = useNotification();

  // --- store user data ---
  const storeUserData = (data: UserDataState) => {
    dispatch(setUserData(data));
  }

  const userData = useSelector<State, UserDataState>(state => state.userData)

  const getData = async () => {
    const { currentUser } = firebase.auth();

    try {
      // Fetch user data
      if (currentUser) {

        // checking the username is already in the userName state
        // If there is no username we are going to fetch an store that in state
        // Next time this if condition will be false
        if (currentUser.email && (userData.name.trim() === "")) {
          pushNotification("Fetching your account information");

          // Fetch information from database
          const userData = await firebase.firestore()
            .collection("global-users")
            .doc(currentUser.email)
            .get();

          // Checking the information in exist or not
          if (userData.exists)
            // store
            storeUserData(userData.data() as UserDataState);
          else
            pushNotification("No data available")
        }
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
