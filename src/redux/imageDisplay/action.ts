import { SetImageDisplayUrl, SET_IMAGE_DISPLAY_URL } from "./type";

export const setImageDisplayUrl = (payload?: string): SetImageDisplayUrl => ({
  type: SET_IMAGE_DISPLAY_URL,
  payload
});

