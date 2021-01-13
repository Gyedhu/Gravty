
// Types 
import {
  UserDataState,
  UserDataActionTypes,
  SET_USER_DATA,
  CLEAR_USER_DATA,
  SET_STATUS_NOT_EMPTY,
  CHANGE_UPLOADS_VALUE
} from "./type";

const inialState: UserDataState = {
  data: {
    imageUrl: "",
    name: "",
    email: "",
    profession: "",
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

    case CHANGE_UPLOADS_VALUE:

      alert(action.payload);

      return {
        ...state,
        data: {
          ...state.data,
          
          uploads: state.data.uploads + action.payload
        }
      };

    default:
      return state;
  }
}

export default reducer;

