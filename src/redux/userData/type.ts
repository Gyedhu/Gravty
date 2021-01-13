export const SET_USER_DATA = "SET_USER_DATA";
export const CLEAR_USER_DATA = "CLEAR_USER_DATA";
export const SET_STATUS_NOT_EMPTY = "SET_STATUS_NOT_EMPTY";
export const CHANGE_UPLOADS_VALUE = "CHANGE_UPLOADS_VALUE";

export interface UserDataState {
  data: {
    imageUrl?: string;
    name: string;
    email: string;
    profession: string;
    uploads: number;
    friends: number;
    stars: number;
  };

  empty: boolean;
}

export interface SetUserData {
  type: typeof SET_USER_DATA;
  payload: UserDataState["data"];
};

export interface SetStatusNotEmpty {
  type: typeof SET_STATUS_NOT_EMPTY;
};

export interface ClearUserData {
  type: typeof CLEAR_USER_DATA;
};

export interface ChangeUploadsValue {
  type: typeof CHANGE_UPLOADS_VALUE;
  payload: number;
};

export type UserDataActionTypes = SetUserData | ClearUserData | SetStatusNotEmpty | ChangeUploadsValue;
