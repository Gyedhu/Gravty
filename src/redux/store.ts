import { createStore } from "redux";
import notification from "./notification/reducer";

const store = createStore(notification);

export default store;