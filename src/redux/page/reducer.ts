import { ADD_PAGE_DATA, PageAction, PageState } from "./type";

const intialState: PageState = {
  header: null,
  data: []
};

const reducer = (state: PageState = intialState, action: PageAction) => {

  switch (action.type) {

    case ADD_PAGE_DATA:
      return {
        ...state,
        data: action.payload
      }

    default:
      return state;
  }

}

export default reducer;

