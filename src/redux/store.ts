import { combineReducers, createStore } from "redux";
import notification from "./notification/reducer";
import { NotificationState } from "./notification/type";
import userdata from "./userdata/reducer";
import { UserDataState } from "./userdata/type";

export interface State {
  notification: NotificationState;
  userData: UserDataState;
};

const store = createStore(combineReducers({
  notification: notification,
  userData: userdata
}));

export default store;