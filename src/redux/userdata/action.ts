import { SetUserData, SET_USER_DATA, UserDataState } from "./type";

export const setUserData = (payload: UserDataState): SetUserData => ({
  type: SET_USER_DATA,
  payload: payload
});

