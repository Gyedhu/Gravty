import { combineReducers, createStore } from "redux";
import notification from "./notification/reducer";
import userdata from "./userdata/reducer";
import pageEditor from "./pageEditor/reducer";
import { NotificationState } from "./notification/type";
import { UserDataState } from "./userdata/type";
import { PageEditorState } from "./pageEditor/type";

export interface State {
  notification: NotificationState;
  userData: UserDataState;
  pageEditor: PageEditorState;
};

const store = createStore(combineReducers({
  notification: notification,
  userData: userdata,
  pageEditor: pageEditor
}));

export default store;