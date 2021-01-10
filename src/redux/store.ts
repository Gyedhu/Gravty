import { combineReducers, createStore } from "redux";

import { NotificationState } from "./notification/type";
import { UserDataState } from "./userData/type";
import { PageEditorState } from "./pageEditor/type";
import { PageState } from "./page/type";

import {
  notification,
  imageDisplay,
  userData,
  pageEditor,
  page,
  question
} from "./index";
import { QuestionState } from "./question/type";
import { ImageDisplayState } from "./imageDisplay/type";

export interface State {
  notification: NotificationState;
  userData: UserDataState;
  pageEditor: PageEditorState;
  page: PageState;
  question: QuestionState;
  imageDisplay: ImageDisplayState;
};

const store = createStore(combineReducers({
  notification,
  userData,
  pageEditor,
  page,
  question,
  imageDisplay
}));

export default store;