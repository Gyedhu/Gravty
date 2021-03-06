import { PageData, PageMapables } from "../../types/pageMapables";

export const ADD_PAGE_DATA = "ADD_PAGE_DATA";
export const ADD_PAGE_HEADER = "ADD_PAGE_HEADER";

export interface PageHeaderType {
  imageUrl?: string;
  auther: string;
  date: string;
  title: string;
  subTitle?: string;
}

// State
export interface PageState {
  header: PageHeaderType | null;
  data: PageData | null;
};


// Actions

// Action for add page data
export interface AddPageData {
  type: typeof ADD_PAGE_DATA;
  payload: PageMapables;
};


// Action for add page title
export interface AddPageHeader {
  type: typeof ADD_PAGE_HEADER;
  payload: boolean;
};

export type PageAction = AddPageData | AddPageHeader;
