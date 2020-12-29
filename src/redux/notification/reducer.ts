import {
  CLEAR_NOTIFICATION,
  NotificationActionTypes,
  NotificationState,
  SET_NOTIFICATION
} from "./type";

const inialState: NotificationState = {
  message: ""
};

const reducer = (state: NotificationState = inialState, action: NotificationActionTypes): NotificationState => {

  switch (action.type) {

    case SET_NOTIFICATION:
      return {
        ...state,
        message: action.payload
      };

    case CLEAR_NOTIFICATION:
      return {
        ...state,
        message: ""
      }

    default:
      return state;
  }
}

export default reducer;

