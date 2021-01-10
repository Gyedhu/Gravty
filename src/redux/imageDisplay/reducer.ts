import {
  ImageDisplayActionsTypes,
  ImageDisplayState,
  SET_IMAGE_DISPLAY_URL
} from "./type";

const initialState: ImageDisplayState = {
  url: ""
};

export default function reducer(state = initialState, action: ImageDisplayActionsTypes): ImageDisplayState {

  switch (action.type) {

    case SET_IMAGE_DISPLAY_URL:
      return {
        ...state,
        url: action.payload
      };

    default:
      return state;

  }

}
