export const SET_SELECT_ELEMENT_BOX = "SET_SELECT_ELEMENT_BOX";

export interface PageEditorState {
  selectElementBox?: boolean;
};

export interface SetSelectElementBox {
  type: typeof SET_SELECT_ELEMENT_BOX;
  payload: boolean;
};

export type PageEditorStateAction = SetSelectElementBox;
