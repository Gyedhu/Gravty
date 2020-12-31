import React from "react";
import { Button, FlexView, FloatingBox } from "../../components";
import { Paragraph, View } from "..";

const PageEditorElemenetSelector = () => {
  return <FloatingBox side="center" active={false}>
    <View>
      <FlexView direction="column" gap="30px" paddingHorizontal="20px" paddingVertical="20px" popup radius="10px" shadow>

        <FlexView justify="space-between">
          <Paragraph header="Elements" content="Select one you want to add" />
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
  </FloatingBox>
}

export default PageEditorElemenetSelector
