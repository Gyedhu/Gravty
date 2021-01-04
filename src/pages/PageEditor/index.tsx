import React from "react";
import { FlexView } from "../../components";

// Containers
import {
  Page,
  PageEditButtons,
  PageEditorElemenetSelector,
  Header,
  View,
  CurrentWritingFieldMap
} from "../../container";

const PageEditor = () => {

  return <View>
    <Header title="Editor" subTitle="Write your page" />
    <PageEditButtons />
    <Page />
    <CurrentWritingFieldMap />
    <PageEditorElemenetSelector />

    <FlexView minHeight="100px" />
  </View>
}

export default PageEditor;
