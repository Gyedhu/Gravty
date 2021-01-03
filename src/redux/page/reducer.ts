import { IMAGE, LIST, PARAGRAPH } from "../../container/PageListMap/types";
import { ADD_PAGE_DATA, PageAction, PageState } from "./type";

const intialState: PageState = {
  header: {
    auther: "Cristian Justin",
    date: new Date().toLocaleString(),
    title: "QuickSort",
    imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    subTitle: "The King Behind the Scene"
  },
  data: [
    {
      contentType: PARAGRAPH,
      header: "Introduction",
      content: "Quicksort is an efficient sorting algorithm. Developed by British computer scientist Tony Hoare in 1959 and published in 1961, it is still a commonly used algorithm for sorting. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort. "
    },
    {
      contentType: LIST,
      type: "decimal",
      listItems: [
        "Always pick first element as pivot.",
        "Always pick last element as pivot (implemented below) ",
        "Pick a random element as pivot.",
        "Pick median as pivot.",
      ]
    },
    {
      contentType: IMAGE,
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
      footer: "Beautyful Forest"
    },
    {
      contentType: PARAGRAPH,
      content: "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware."
    }
  ]
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

