import React from "react";
import { Button, FlexView, FloatingBox, TextArea } from "../../components";
import { PageEditButtons, PageEditorElemenetSelector, Paragraph } from "../../container";
import Header from "../../container/Header";
import View from "../../container/View";

const PageEditor = () => {
  return <View>
    <Header title="Editor" subTitle="Write your page" />
    <PageEditButtons />
    <PageEditorElemenetSelector />

    <FloatingBox side="bottom" active={true}>
      <View>
        <TextArea placeholder="Write your content" />
        <FlexView>
          <Button background fit title="Finished" />
          <Button className="ri-attachment-2" title="Attach" />
          <Button className="ri-delete-bin-line" title="Clear" />
          <Button className="ri-close-circle-line" />
        </FlexView>
      </View>
    </FloatingBox>
  </View >
}

export default PageEditor;
