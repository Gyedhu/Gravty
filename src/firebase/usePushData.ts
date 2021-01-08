import firebase from "firebase";
import "firebase/firestore";
import { UserDataState } from "../redux/userData/type";

const usePushData = () => {

  // Push data to
  const pushTo = (data: UserDataState | {imageUrl: string}, path: string) => new Promise(
    async (resolve, reject) => {

      try {
        await firebase.firestore().doc(path).set(data, { merge: true });
        resolve("Success");
      } catch (error) {
        reject(error);
      }

    }
  )

  return { pushTo };

}


export default usePushData;


