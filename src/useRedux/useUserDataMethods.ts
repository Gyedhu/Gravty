// Redux
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userData/action";
import { UserDataState } from "../redux/userData/type";

export default function useUserDataMethods() {

  // dispatch
  const dispatch = useDispatch();

  const storeUserData = (data: UserDataState) => {
    dispatch(setUserData(data));
  }


  return { storeUserData };

}
