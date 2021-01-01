import { Data } from "../../container/PageListMap/types";

export const ADD_PAGE_DATA = "ADD_DATA";
export const SET_WRITE_BOX = "SET_WRITE_BOX";
export const SET_CURRENT_WRITING = "SET_CURRENT_WRITING";

interface Header {
  imageUrl?: string;
  auther: string;
  date: string;
  title: string;
  subTitle?: string;
}

export interface PageState {
  header: Header | null;
  data: Data | null;
};

export interface AddPageData {
  type: typeof ADD_PAGE_DATA;
  payload: boolean;
};

export interface SetWriteBox {
  type: typeof SET_WRITE_BOX;
  payload: boolean;
};

export interface SetCurrentWriting {
  type: typeof SET_CURRENT_WRITING;
  payload: string;
};

export type PageAction = AddPageData;
