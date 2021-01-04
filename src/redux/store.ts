import { combineReducers, createStore } from "redux";

import { NotificationState } from "./notification/type";
import { UserDataState } from "./userData/type";
import { PageEditorState } from "./pageEditor/type";
import { PageState } from "./page/type";

import {
  notification,
  userData,
  pageEditor,
  page
} from "./index";

export interface State {
  notification: NotificationState;
  userData: UserDataState;
  pageEditor: PageEditorState;
  page: PageState;
};

const store = createStore(combineReducers({
  notification,
  userData,
  pageEditor,
  page
}));

export default store;