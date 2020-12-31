export const SET_SELECT_ELEMENT_BOX = "SET_SELECT_ELEMENT_BOX";
export const SET_WRITE_BOX = "SET_WRITE_BOX";

export interface PageEditorState {
  selectElementBox?: boolean;
  writeBox?: boolean;
};

export interface SetSelectElementBox {
  type: typeof SET_SELECT_ELEMENT_BOX;
  payload: boolean;
};

export interface SetWriteBox {
  type: typeof SET_WRITE_BOX;
  payload: boolean;
};

export type PageEditorStateAction = SetSelectElementBox | SetWriteBox;
