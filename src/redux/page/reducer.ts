import { lorem } from "faker";
import { Writer } from "../../assets/images";
import {
  ADD_PAGE_DATA,
  ADD_PAGE_HEADER,
  PageAction,
  PageState
} from "./type";

const intialState: PageState = {
  header: {
    auther: lorem.sentence(2),
    date: new Date().toLocaleDateString(),
    title: lorem.sentence(5)
  },
  data: [
    {
      contentType: "IMAGE",
      url: Writer,
      fit: "fit-in-both",
    },
    {
      contentType: "PARAGRAPH",
      header: lorem.sentence(4),
      content: lorem.paragraph(20),
    },
    {
      contentType: "LIST",
      type: "decimal",
      listItems: Array(5).fill(null).map(() => lorem.sentence(10))
    },
    {
      contentType: "SETNTENCE_WITH_COLON",
      beforeColon: lorem.sentence(2),
      sentence: lorem.sentence(50)
    },
    {
      contentType: "SETNTENCE_WITH_COLON",
      beforeColon: lorem.sentence(2),
      sentence: lorem.sentence(50)
    },
    {
      contentType: "SETNTENCE_WITH_COLON",
      beforeColon: lorem.sentence(2),
      sentence: lorem.sentence(50)
    }
  ]
};

const reducer = (state: PageState = intialState, action: PageAction) => {

  switch (action.type) {

    case ADD_PAGE_DATA:

      const newData = state.data?.slice();
      newData?.push(action.payload);

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

