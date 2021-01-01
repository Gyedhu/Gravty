import {
  AddPageData,
  ADD_PAGE_DATA
} from "./type";

export const addPageData = (payload: boolean): AddPageData => ({
  type: ADD_PAGE_DATA,
  payload: payload
}); 
