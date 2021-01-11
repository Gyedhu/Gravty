import React from "react";
import { FlexView } from "../../components";

// Containers
import {
  PageEditButtons,
  PageEditorElemenetSelector,
  View,
  CurrentWritingFieldMap
} from "../../container";

const PageEditor = () => {

  return <View>
    <PageEditButtons />
    <CurrentWritingFieldMap />
    <PageEditorElemenetSelector />
    <FlexView minHeight="100px" />
  </View>
}

export default PageEditor;
