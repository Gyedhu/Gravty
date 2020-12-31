import React from "react";
import { Button, FlexView, FloatingBox, TextArea } from "../../components";
import { PageEditButtons, Paragraph } from "../../container";
import Header from "../../container/Header";
import View from "../../container/View";

const PageEditor = () => {

  return <View>
    <Header title="Editor" subTitle="Write your page" />
    <PageEditButtons />

    <FloatingBox side="center" active={true}>
      <View>
        <FlexView direction="column" gap="30px" paddingHorizontal="20px" paddingVertical="20px" popup radius="10px" shadow>

          <FlexView justify="space-between">
            <Paragraph
              header="Elements"
              content="Select one you want to add"
            />
            <Button className="ri-close-circle-line" />
          </FlexView>

          <FlexView direction="column" gap="10px" maxHeight="250px">
            <Button border rounded title="Header" width="fit-content" />
            <Button border rounded title="Pagragraph" width="fit-content" />
            <Button border rounded title="Paragraph with header" width="fit-content" />
            <Button border rounded title="List" width="fit-content" />
            <Button border rounded title="Image" width="fit-content" />
            <Button border rounded title="Audio" width="fit-content" />
          </FlexView>
        </FlexView>
      </View>
    </FloatingBox >

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
