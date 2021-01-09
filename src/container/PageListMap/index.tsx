import React from "react";

// Containers
import {
  List,
  Paragraph,
  Image
} from "..";
import {
  PageMapables,
  PARAGRAPH,
  LIST,
  IMAGE
} from "../../types/pageMapables";


const PageListMap: React.FC<PageMapables> = (props) => {

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

export default PageListMap;
