import { ClearUserData, SET_STATUS_NOT_EMPTY, CLEAR_USER_DATA, SetUserData, SET_USER_DATA, UserDataState, SetStatusNotEmpty, ChangeUploadsValue, CHANGE_UPLOADS_VALUE } from "./type";

export const setUserData = (payload: UserDataState["data"]): SetUserData => ({
  type: SET_USER_DATA,
  payload: payload
});

export const setStatusNotEmpty = (): SetStatusNotEmpty => ({
  type: SET_STATUS_NOT_EMPTY,
});

export const clearUserData = (): ClearUserData => ({
  type: CLEAR_USER_DATA
});

export const changeUploadsValue = (payload: number): ChangeUploadsValue => ({
  type: CHANGE_UPLOADS_VALUE,
  payload
});

