import React from "react";
import {
  PageEditButtons,
  PageEditorElemenetSelector,
  WriteBox
} from "../../container";
import Header from "../../container/Header";
import View from "../../container/View";

const PageEditor = () => {
  return <View>
    <Header title="Editor" subTitle="Write your page" />
    <PageEditButtons />
    <PageEditorElemenetSelector />
    <WriteBox onSubmit={(data, file) => {
      console.log(data, file);
    }} />
  </View>
}

export default PageEditor;
