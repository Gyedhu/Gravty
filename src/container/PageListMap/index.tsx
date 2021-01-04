import React from "react";

// Containers
import {
  List,
  Paragraph,
  Image
} from "..";
import { PageListType } from "../PageElementTypes";
import { IMAGE, LIST, PARAGRAPH } from "../PageElementTypesContants";


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

export default PageListMap;
