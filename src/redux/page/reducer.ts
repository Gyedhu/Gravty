import { User } from "../../assets/images";
import {
  ADD_PAGE_DATA,
  ADD_PAGE_HEADER,
  PageAction,
  PageState
} from "./type";

const intialState: PageState = {
  header: {
    auther: "Yedhu",
    date: new Date().toLocaleString(),
    title: "React Higher-Order Components in TypeScript",
    imageUrl: User,
  },
  data: []
};

const reducer = (state: PageState = intialState, action: PageAction) => {

  switch (action.type) {

    case ADD_PAGE_DATA:

      const newData = state.data?.slice();
      newData?.push(action.payload);

      console.log(newData);

      return {
        ...state,
        data: newData
      }

    case ADD_PAGE_HEADER:
      return {
        ...state,
        header: action.payload
      }

    default:
      return state;
  }

}

export default reducer;

