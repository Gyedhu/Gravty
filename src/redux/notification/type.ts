export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION";

export interface NotificationState {
  message: string;
};

export interface SetNotification {
  type: typeof SET_NOTIFICATION;
  payload: string;
}

export interface ClearNotification {
  type: typeof CLEAR_NOTIFICATION;
}

export type NotificationActionTypes = SetNotification | ClearNotification; 
