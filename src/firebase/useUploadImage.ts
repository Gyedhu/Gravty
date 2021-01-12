import firebase from "firebase";
import "firebase/storage";
import "firebase/auth";
import { useCallback } from "react";
import { useNotification } from "../useRedux";

const useUploadImage = () => {

  // Dispatch
  const { pushNotification } = useNotification();

  const uploadImage = useCallback(
    (path: string, file: File) => new Promise(
      async (resolve, reject) => {

        try {
          pushNotification("Please wait");
          const ref = firebase.storage().ref(path);
          const task = ref.put(file);

          task.on("state_change",

            // Progress
            (snapshot) => {
              const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)) * 100;
              pushNotification(`Upload ${progress}% finished`);
            },

            // Error
            (error) => {
              reject(error);
            },

            // Success
            async () => {
              pushNotification("Upload success", 2);
              const url = await ref.getDownloadURL();
              resolve(url);
            }
          )

        } catch (error) {
          reject(error);
        }

      }
    ), [pushNotification]);

  return { uploadImage };

}

export default useUploadImage;
