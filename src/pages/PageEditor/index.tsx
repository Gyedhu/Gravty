import React from "react";
import { FlexView } from "../../components";

// Containers
import {
  Page,
  PageEditButtons,
  PageEditorElemenetSelector,
  View,
  CurrentWritingFieldMap
} from "../../container";

const PageEditor = () => {

  return <View>
    <PageEditButtons />
    <Page />
    <CurrentWritingFieldMap />
    <PageEditorElemenetSelector /> 
    <FlexView minHeight="100px" />
  </View>
}

export default PageEditor;
