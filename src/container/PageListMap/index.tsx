import React from "react";

// Containers
import {
  List,
  Paragraph,
  Image
} from "..";

// Type for map page list
import {
  IMAGE, 
  LIST,
  PARAGRAPH,
  PageListType
} from "./types";

const PageListMap: React.FC<PageListType> = (props) => {

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
