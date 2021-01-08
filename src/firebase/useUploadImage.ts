import firebase from "firebase";
import "firebase/storage";
import "firebase/auth";
import { useDispatch } from "react-redux";
import { setNotification } from "../redux/notification/action";
import usePushData from "./usePushData";

const useUploadImage = () => {

  // Dispatch
  const dispatch = useDispatch();

  // Upload data
  const { pushTo } = usePushData();

  // --- Notification ---
  const notification = (message: string) => {
    dispatch(setNotification(message));
  }

  const upload = (path: string, file: Blob, callback?: () => void) => {

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
          notification(error.message);

          // Close notification 
          setTimeout(() => notification(""), 2000);
        },
        async () => {
          notification("Upload success");
          const url = await ref.getDownloadURL();
          const { currentUser } = firebase.auth();
          if (currentUser)
            await pushTo({ imageUrl: url }, `global-users/${currentUser.email}`);

          if (callback)
            callback();

          // Close notification 
          setTimeout(() => notification(""), 2000);
        }
      )

    } catch (error) {
      notification(error);
    }

  }

  return { upload };

}

export default useUploadImage;
