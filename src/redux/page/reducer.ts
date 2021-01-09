import { User } from "../../assets/images";
import { ADD_PAGE_DATA, ADD_PAGE_HEADER, PageAction, PageState } from "./type";

const intialState: PageState = {
  header: {
    auther: "Yedhu",
    date: new Date().toLocaleString(),
    title: "Quick Sort",
    imageUrl: User,
    subTitle: "The king of sorting algorithms"
  },
  data: [
    {
      contentType: 'PARAGRAPH',
      header: 'Hello World!',
      content: 'A "Hello, World!" program generally is a computer program that outputs or displays the message "Hello, World!". Such a program is very simple in most programming languages, and is often used to illustrate the basic syntax of a programming language. It is often the first program written by people learning to code. ',
    },
    {
      contentType: 'PARAGRAPH',
      content: 'A "Hello, World!" program generally is a computer program that outputs or displays the message "Hello, World!". Such a program is very simple in most programming languages, and is often used to illustrate the basic syntax of a programming language. It is often the first program written by people learning to code. A "Hello, World!" program generally is a computer program that outputs or displays the message "Hello, World!". Such a program is very simple in most programming languages, and is often used to illustrate the basic syntax of a programming language. It is often the first program written by people learning to code. ',
    }
  ]
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

