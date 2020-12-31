import React from "react";
import List from "../List";
import Paragraph from "../Paragraph";
import {
  LIST,
  ListTypes,
  PARAGRAPH,
  ParagraphTypes
} from "./types";

const PageListMap: React.FC<ParagraphTypes | ListTypes> = (props) => {

  // List
  if (props.contentType === LIST)
    return <List {...props} />

  // Paragraph
  else if (props.contentType === PARAGRAPH)
    return <Paragraph {...props} />

  // If nothing
  else {
    return null;
  }

}

export default PageListMap
