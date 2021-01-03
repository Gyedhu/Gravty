import React from "react";

// Containers
import {
  Page,
  PageEditButtons,
  PageEditorElemenetSelector,
  Header,
  View,
  MainHeaderWriter
} from "../../container";

const PageEditor = () => {

  return <View>
    <Header title="Editor" subTitle="Write your page" />
    <PageEditButtons />
    <Page />
    <MainHeaderWriter />
    <PageEditorElemenetSelector />

  </View>
}

export default PageEditor;
