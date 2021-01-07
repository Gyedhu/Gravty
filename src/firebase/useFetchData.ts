import firebase from "firebase/app";
import "firebase/firestore";

const useFetchData = () => {
  // --- fetchFromFirestore ---
  const fetchFrom = (path: string) => new Promise(
    async (resolve, reject) => {

      const ref = firebase.firestore().doc(path);

      try {
        const data = await ref.get();

        // Checking the data is exist or not
        if (data.exists) {
          const userData = data.data();
          resolve(userData);
        } else {
          reject({ message: "No data available" });
        }

      } catch (error) {
        reject(error);
      }

    }
  )

  return { fetchFrom };

}

export default useFetchData;
