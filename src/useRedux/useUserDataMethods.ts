// Redux
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setStatusNotEmpty, setUserData } from "../redux/userData/action";
import { UserDataState } from "../redux/userData/type";

export default function useUserDataMethods() {

  // dispatch
  const dispatch = useDispatch();

  // Store use data in state
  const storeUserData = useCallback((data: UserDataState["data"]) => {
    dispatch(setUserData(data));
  }, [dispatch]);


  // Set the data empty value true to say that the data is already loaded
  const setStatusLoaded = useCallback(() => {
    dispatch(setStatusNotEmpty());
  }, [dispatch]);

  return { storeUserData, setStatusLoaded };

}
