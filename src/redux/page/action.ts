import {
  AddPageData,
  ADD_PAGE_DATA,
  ADD_PAGE_HEADER,
  PageHeaderType
} from "./type";

export const addPageData = (payload: boolean): AddPageData => ({
  type: ADD_PAGE_DATA,
  payload: payload
});

export const addPageHeader = (payload: PageHeaderType) => ({
  type: ADD_PAGE_HEADER,
  payload: payload
});
