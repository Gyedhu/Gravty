import React from "react";
import { useSelector } from "react-redux";

// Containers
import { MainHeaderWriter } from "..";

// State, Redux and actions
import { PageEditorState } from "../../redux/pageEditor/type";
import { State } from "../../redux/store";
import ParagraphWithHeaderWriter from "../ParagraphWithHeaderWriter";

const CurrentWritingFieldMap = () => {

  // State and Dispatch
  const { currentWriting } = useSelector<State, PageEditorState>(state => state.pageEditor);

  switch (currentWriting) {

    case "main-header":
      return <MainHeaderWriter />

    case "paragraph-with-header":
      return <ParagraphWithHeaderWriter />

    default: return null;
  }

}

export default CurrentWritingFieldMap;
