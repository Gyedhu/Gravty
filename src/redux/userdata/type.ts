export const SET_USER_DATA = "SET_USER_DATA";

export interface UserDataState {
  imageUrl?: string;
  name: string;
  email: string;
  profession: string;
  uploads: number;
  friends: number;
  stars: number;
};

export interface SetUserData {
  type: typeof SET_USER_DATA;
  payload: UserDataState;
};

export type UserDataActionTypes = SetUserData;
