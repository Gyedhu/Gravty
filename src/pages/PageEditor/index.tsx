import React from "react";
import { useDispatch } from "react-redux";
import {
  List,
  PageEditButtons,
  PageEditorElemenetSelector,
  PageHeader,
  Paragraph,
  WriteBox
} from "../../container";
import Header from "../../container/Header";
import View from "../../container/View";

const PageEditor = () => {

  // Dispatch
  const diaptch = useDispatch();

  // Read data
  const readData = (data: string, file?: FileList | null | undefined) => {

  }

  return <View>
    <Header title="Editor" subTitle="Write your page" />
    <PageEditButtons />
    <PageEditorElemenetSelector />
    <WriteBox onSubmit={readData} />
  </View>
}

export default PageEditor;
