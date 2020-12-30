import { UserDataState, UserDataActionTypes, SET_USER_DATA } from "./type";

const inialState: UserDataState = {
  imageUrl: "",
  name: "",
  email: "",
  profession: "",
  uploads: 0,
  friends: 0,
  stars: 0,
};

const reducer = (state: UserDataState = inialState, action: UserDataActionTypes): UserDataState => {

  switch (action.type) {

    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}

export default reducer;

