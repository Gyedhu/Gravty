import React from "react";
// import { useDispatch } from "react-redux";

import {
  Page,
  PageEditButtons,
  PageEditorElemenetSelector,
  Header,
  View,
  WriteBox
} from "../../container";

const PageEditor = () => {

  // Dispatch
  // const diaptch = useDispatch();

  // Read data
  const readData = (data: string, file?: FileList | null | undefined) => {

  }

  return <View>
    <Header title="Editor" subTitle="Write your page" />
    <PageEditButtons />

    <Page />

    <PageEditorElemenetSelector />
    <WriteBox onSubmit={readData} />
  </View>
}

export default PageEditor;
