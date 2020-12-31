import {
  SetSelectElementBox, SET_SELECT_ELEMENT_BOX
} from "./type";

export const setSelectElementBox = (payload: boolean): SetSelectElementBox => ({
  type: SET_SELECT_ELEMENT_BOX,
  payload: payload
});
