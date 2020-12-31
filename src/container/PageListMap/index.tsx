import React from "react";

import {
  List,
  Paragraph,
  Image
} from "..";

import {
  IMAGE,
  ImageTypes,
  LIST,
  ListTypes,
  PARAGRAPH,
  ParagraphTypes
} from "./types";

const PageListMap: React.FC<ParagraphTypes | ListTypes | ImageTypes> = (props) => {

  switch (props.contentType) {

    // List
    case LIST:
      return <List {...props} />

    // Paragraph
    case PARAGRAPH:
      return <Paragraph {...props} />

    // Image
    case IMAGE:
      return <Image {...props} />

    // If nother
    default:
      return null;
  }
}

export default PageListMap
