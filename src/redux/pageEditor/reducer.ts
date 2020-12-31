import { PageEditorState, PageEditorStateAction, SET_SELECT_ELEMENT_BOX } from "./type";

const intialState: PageEditorState = {
  selectElementBox: false
};

const reducer = (state: PageEditorState = intialState, action: PageEditorStateAction) => {

  switch (action.type) {

    case SET_SELECT_ELEMENT_BOX:
      return {
        ...state,
        selectElementBox: action.payload
      };

    default:
      return state;

  }

}

export default reducer;

