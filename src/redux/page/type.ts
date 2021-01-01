import { Data } from "../../container/PageListMap/types";

export const ADD_PAGE_DATA = "ADD_DATA";

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

export type PageAction = AddPageData;
