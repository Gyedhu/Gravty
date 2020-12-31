import {
  SetSelectElementBox,
  SetWriteBox,
  SET_SELECT_ELEMENT_BOX,
  SET_WRITE_BOX
} from "./type";

export const setSelectElementBox = (payload: boolean): SetSelectElementBox => ({
  type: SET_SELECT_ELEMENT_BOX,
  payload: payload
});

export const setWriteBox = (payload: boolean): SetWriteBox => ({
  type: SET_WRITE_BOX,
  payload: payload
});
