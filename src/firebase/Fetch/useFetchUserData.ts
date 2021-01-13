import firebase from "firebase/app";
import "firebase/firestore";

// Redux
import { useSelector } from "react-redux";
import { useNotification, useUserDataMethods } from "../../useRedux";
import { State } from "../../redux/store";
import { UserDataState } from "../../redux/userData/type";
import { useCallback } from "react";


const useGetUserData = () => {

  // --- Notification ---
  const { pushNotification } = useNotification();

  // --- store user data ---
  const { storeUserData, setStatusLoaded } = useUserDataMethods();


  const { empty } = useSelector<State, UserDataState>(state => state.userData);

  // Fetch promise function
  const fetchUserData = () => new Promise(
    async (resolve, reject) => {

      // Get currentUser information
      const { currentUser } = firebase.auth();

      // checking the current user 
      // if there is no user no fetch going to be heppened!
      if (!currentUser)
        reject({ message: "No user" });

      else if (currentUser.email) {

        try {
          // Fetching from`global-users/{email}`
          const response = await firebase.firestore()
            .collection("global-users")
            .doc(currentUser.email)
            .get();


          // Checking the data is exist or not
          if (response.exists)
            resolve(response.data());
          else
            reject({ message: "No data available" });

        }
        catch (error) {
          reject(error);
        }
      }
    }
  );


  // Fetching
  const getData = useCallback(() => {

    if (empty) {
      pushNotification("Fetching your account information");

      // Fetch only if data is not fetched  
      fetchUserData()
        .then(data => {
          storeUserData(data as UserDataState["data"]);
          setStatusLoaded();
          pushNotification("Welcome", 2);
        })
        .catch(error => pushNotification(error.message, 2));
    }

  }, [empty, pushNotification, storeUserData, setStatusLoaded])

  return { getData };

}

export default useGetUserData;
