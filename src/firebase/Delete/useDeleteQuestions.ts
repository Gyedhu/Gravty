import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { UserDataState } from "../../redux/userData/type";
import { useNotification, useUserDataMethods } from "../../useRedux";
import { useQuestionMethods } from "../../useRedux";


export default function useDeleteQuestion() {

  const { pushNotification } = useNotification();
  const { removeQuestionFromList } = useQuestionMethods();
  const { decrementUploads } = useUserDataMethods();

  const { uploads } = useSelector<State, UserDataState["data"]>(state => state.userData.data);

  const deleteQuestion = async (id: string, haveImage: boolean) => {

    const { currentUser } = firebase.auth();
    if (currentUser) {
      if (currentUser.email) {
        try {

          pushNotification("Please wait...");

          const { currentUser } = firebase.auth();

          if (!currentUser) {
            pushNotification("Removed failed", 2);
            return;
          }

          await firebase.firestore()
            .collection("questions")
            .doc(id)
            .delete();

          if (haveImage) {
            await firebase.storage().ref(`${currentUser.uid}/${id}`).delete();
          }

          removeQuestionFromList(id);

          // decrement uplaods number
          await firebase.firestore()
            .collection("global-users")
            .doc(`${currentUser.email}`)
            .update({
              uploads: uploads - 1
            });

          decrementUploads();

          pushNotification("Question removed...", 2);
        }
        catch (error) {
          pushNotification(error.message, 2);
        }
      }

    }

  }

  return deleteQuestion;
}