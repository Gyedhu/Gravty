// constants
export const SET_IMAGE_DISPLAY_URL = "SET_IMAGE_DISPLAY_URL";

// State
export interface ImageDisplayState {
  url?: string;
};

// Action
export interface SetImageDisplayUrl {
  type: typeof SET_IMAGE_DISPLAY_URL;
  payload?: string;
};

export type ImageDisplayActionsTypes = SetImageDisplayUrl;
