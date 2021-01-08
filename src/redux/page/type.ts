import { Data, PageListType } from "../../container/PageElementTypes";

export const ADD_PAGE_DATA = "ADD_PAGE_DATA";
export const ADD_PAGE_HEADER = "ADD_PAGE_HEADER";

export interface PageHeaderType {
  imageUrl?: string;
  auther: string;
  date: string;
  title: string;
  subTitle?: string;
}

export interface PageState {
  header: PageHeaderType | null;
  data: Data | null;
};

export interface AddPageData {
  type: typeof ADD_PAGE_DATA;
  payload: PageListType;
};

export interface AddPageHeader {
  type: typeof ADD_PAGE_HEADER;
  payload: boolean;
};

export type PageAction = AddPageData | AddPageHeader;
