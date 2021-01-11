import React, { memo, useEffect } from "react";

// firebase
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Containers
import {
  ProfileDisplayCard,
  ProfileNavigation,
  ProfileTitle,
  View
} from "../../container";
import { useNotification, useUserDataMethods } from "../../useRedux";
import { UserDataState } from "../../redux/userData/type";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";


const Profile = () => {

  // userData methods
  const { storeUserData, setStatusLoaded } = useUserDataMethods();

  // notification methods
  const { pushNotification } = useNotification();

  // Userdata load status
  const { empty } = useSelector<State, UserDataState>(state => state.userData);


  // fetch
  const fetchUserData = () => new Promise(
    async (resolve, reject) => {

      const { currentUser } = firebase.auth();

      // checking the current user 
      // if there is no user no fetch going to be heppened!
      if (!currentUser)
        reject({ message: "Error while fetching information" });

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
  )


  // User data fetch function
  const getUserData = () => {
    pushNotification("Fetching your account information");

    // Fetch only if data is not fetched  
    fetchUserData()
      .then(data => {
        storeUserData(data as UserDataState["data"]);
        setStatusLoaded();
        pushNotification("Fetch success", 2);
      })
      .catch(error => pushNotification(error.message, 2));
  }

  // fetch user data
  useEffect(
    getUserData,
    [empty, storeUserData, setStatusLoaded, pushNotification]
  );

  console.log("rendering")

  return <View type="medium">

    {/* Profile Title */}
    <ProfileTitle />

    {/* Profile Navigation */}
    <ProfileNavigation />

    {/* Profile Display Card */}
    <ProfileDisplayCard />

  </View>

}


export default memo(Profile);

