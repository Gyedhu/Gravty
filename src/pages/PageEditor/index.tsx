import React from "react";

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

  </View>
}

export default PageEditor;
