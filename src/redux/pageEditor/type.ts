import { mapableConstants } from "../../types/pageMapables";

export const SET_SELECT_ELEMENT_BOX = "SET_SELECT_ELEMENT_BOX";
export const SET_WRITE_BOX = "SET_WRITE_BOX";
export const SET_CURRENT_WRITING = "SET_CURRENT_WRITING";

export interface PageEditorState {
  selectElementBox?: boolean;
  writeBox?: boolean;
  currentWriting?: mapableConstants;
};

export interface SetSelectElementBox {
  type: typeof SET_SELECT_ELEMENT_BOX;
  payload: boolean;
};

export interface SetWriteBox {
  type: typeof SET_WRITE_BOX;
  payload: boolean;
};

export interface SetCurrentWriting {
  type: typeof SET_CURRENT_WRITING;
  payload: mapableConstants;
};

export type PageEditorStateAction = SetSelectElementBox | SetWriteBox | SetCurrentWriting;
