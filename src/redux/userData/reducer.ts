
// Types
import { User } from "../../assets/images";
import {
  UserDataState,
  UserDataActionTypes,
  SET_USER_DATA,
  CLEAR_USER_DATA,
  SET_STATUS_NOT_EMPTY
} from "./type";

const inialState: UserDataState = {
  data: {
    imageUrl: User,
    name: "Yedhumohanan.G",
    email: "gyedhumohanan@gmail.com",
    profession: "FullStack developer",
    uploads: 0,
    friends: 0,
    stars: 0,
  },
  empty: true
};

const reducer = (state: UserDataState = inialState, action: UserDataActionTypes): UserDataState => {

  switch (action.type) {

    case SET_USER_DATA:
      return {
        ...state,
        data: { ...action.payload }
      };

    case SET_STATUS_NOT_EMPTY:
      return {
        ...state,
        empty: false
      };

    case CLEAR_USER_DATA:
      return {
        ...state,
        ...inialState
      };

    default:
      return state;
  }
}

export default reducer;

