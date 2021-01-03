import { ADD_PAGE_DATA, ADD_PAGE_HEADER, PageAction, PageState } from "./type";

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

