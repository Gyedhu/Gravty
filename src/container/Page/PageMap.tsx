import React from "react";

// Containers
import {
  List,
  Paragraph,
  Image
} from "..";

// types
import {
  PageMapables,
  PARAGRAPH,
  LIST,
  IMAGE,
  SETNTENCE_WITH_COLON
} from "../../types/pageMapables";
import SentenceWithColon from "./SentenceWithColon";


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

    // Sentence with colon
    case SETNTENCE_WITH_COLON:
      return <SentenceWithColon {...props} />

    // If nother
    default:
      return null;
  }
}

export default PageListMap;
