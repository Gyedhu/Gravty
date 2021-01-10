import { mapableConstants } from "../../types/pageMapables";
import {
  SetCurrentWriting,
  SetSelectElementBox,
  SetWriteBox,
  SET_CURRENT_WRITING,
  SET_SELECT_ELEMENT_BOX,
  SET_WRITE_BOX
} from "./type";

export const setSelectElementBox = (payload: boolean): SetSelectElementBox => ({
  type: SET_SELECT_ELEMENT_BOX,
  payload: payload
});

export const setWriteBox = (payload: boolean, title?: string): SetWriteBox => ({
  type: SET_WRITE_BOX,
  payload
});

export const setCurrentWriting = (payload: mapableConstants): SetCurrentWriting => ({
  type: SET_CURRENT_WRITING,
  payload: payload
});
