import React from "react";
import { useSelector } from "react-redux";

// Containers
import {
  WritePageTitle,
  WriteList,
  WriteImage,
  WriteParagraph,
  WriteParagraphWithTitle
} from "..";

// State, Redux and actions
import { PageEditorState } from "../../redux/pageEditor/type";
import { State } from "../../redux/store";

// Types
import {
  PAGE_TITLE,
  PARAGRAPH_WITH_HEADER,
  IMAGE,
  LIST,
  PARAGRAPH
} from "../../types/pageMapables";

const CurrentWritingFieldMap = () => {

  // State and Dispatch
  const { currentWriting } = useSelector<State, PageEditorState>(state => state.pageEditor);

  switch (currentWriting) {

    case PAGE_TITLE:
      return <WritePageTitle />

    case PARAGRAPH_WITH_HEADER:
      return <WriteParagraphWithTitle />

    case PARAGRAPH:
      return <WriteParagraph />

    case LIST:
      return <WriteList />

    case IMAGE:
      return <WriteImage />

    default: return null;
  }

}

export default CurrentWritingFieldMap;
