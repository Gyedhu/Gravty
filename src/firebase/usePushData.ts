import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth"; 

const usePushData = () => { 

  // Push data to
  const pushTo = (path: string, data: Object) => new Promise(
    async (resolve, reject) => {

      try {
        const ref = firebase.firestore().doc(path);
        await ref.set(data, {merge: true});
        resolve("Success");
      } catch (error) {
        reject(error);
      }
    }
  );

  // Push in array
  const pushInArray = (path: string, fieldName: string, data: string) => new Promise(
    async (resolve, reject) => {
      try {
        await firebase.firestore().doc(path).update({
          [fieldName]: firebase.firestore.FieldValue.arrayUnion(data)
        });
        resolve("Success");
      } catch (error) {
        reject(error);
      }
    }
  )

  // Add data with key
  const AddDataWithKey = (path: string, data: Object) => new Promise(
    async (resolve, reject) => {
      try {
        const ref = firebase.firestore().collection(path);
        const { id } = await ref.add(data);
        resolve(id);
      }
      catch (error) {
        reject(error);
      }
    }
  );

  return { pushTo, pushInArray, AddDataWithKey };

}


export default usePushData;


