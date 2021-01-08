import firebase from "firebase";
import "firebase/storage";
import "firebase/auth";
import { useDispatch } from "react-redux";
import { setNotification } from "../redux/notification/action";
import usePushData from "./usePushData";

const useUploadImage = () => {

  // Dispatch
  const dispatch = useDispatch();

  // --- Notification ---
  const notification = (message: string) => {
    dispatch(setNotification(message));
  }

  const upload = (path: string, file: Blob) => new Promise(
    async (resolve, reject) => {

      try {
        notification("Please wait");
        const ref = firebase.storage().ref(path);
        const task = ref.put(file);

        task.on("state_change",
          (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)) * 100;
            notification(`Upload ${progress}% finished`);
          },
          (error) => {
            reject(error);
          },
          async () => {
            notification("Upload success");
            const url = await ref.getDownloadURL();
            resolve(url);
          }
        )

      } catch (error) {
        reject(error);
      } finally {
        notification("");
      }

    }
  )

  return { upload };

}

export default useUploadImage;
