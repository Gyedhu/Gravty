import React from "react";

// Containers
import {
  Page,
  PageEditButtons,
  PageEditorElemenetSelector,
  Header,
  View
} from "../../container";

const PageEditor = () => {

  return <View>
    <Header title="Editor" subTitle="Write your page" />
    <PageEditButtons />
    <Page />
    <PageEditorElemenetSelector />

  </View>
}

export default PageEditor;
