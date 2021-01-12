import React from "react";
import { FlexView } from "../../components";

// Containers
import {
  PageEditorButtons,
  PageEditorElementSelector,
  View,
  WriteTextFieldMap
} from "../../container";

// Pages
import { Page } from "..";

const PageEditor = () => {

  return <View>
    <PageEditorButtons />
    <Page />
    <WriteTextFieldMap />
    <PageEditorElementSelector />
    <FlexView minHeight="100px" />
  </View>
}

export default PageEditor;
