import { PageEditorState, PageEditorStateAction, SET_CURRENT_WRITING, SET_SELECT_ELEMENT_BOX, SET_WRITE_BOX } from "./type";

const intialState: PageEditorState = {
  selectElementBox: false,
  writeBox: false,
  currentWriting: null
};

const reducer = (state: PageEditorState = intialState, action: PageEditorStateAction) => {

  switch (action.type) {

    case SET_SELECT_ELEMENT_BOX:
      return {
        ...state,
        selectElementBox: action.payload
      };

    case SET_WRITE_BOX:
      return {
        ...state,
        writeBox: action.payload
      };

    case SET_CURRENT_WRITING:
      return {
        ...state,
        currentWriting: action.payload
      };

    default:
      return state;
  }

}

export default reducer;

