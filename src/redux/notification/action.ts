import { ClearNotification, CLEAR_NOTIFICATION, SetNotification, SET_NOTIFICATION } from "./type";

export const setNotification = (payload?: string): SetNotification => ({
  type: SET_NOTIFICATION,
  payload: payload
});

export const clearNotification = (): ClearNotification => ({
  type: CLEAR_NOTIFICATION
});
