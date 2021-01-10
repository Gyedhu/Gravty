import React from "react";
import { useSelector } from "react-redux";

// Containers
import {
  MainHeaderWriter,
  ListWriter,
  ImageWriter,
  ParagraphWriter,
  ParagraphWithHeaderWriter
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
      return <MainHeaderWriter />

    case PARAGRAPH_WITH_HEADER:
      return <ParagraphWithHeaderWriter />

    case PARAGRAPH:
      return <ParagraphWriter />

    case LIST:
      return <ListWriter />

    case IMAGE:
      return <ImageWriter />

    default: return null;
  }

}

export default CurrentWritingFieldMap;
