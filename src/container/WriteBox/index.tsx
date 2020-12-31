import React from "react";
import {
  Button,
  FlexView,
  FloatingBox,
  TextArea
} from "../../components";
import { View } from "..";

const WriteBox = () => {
  return <FloatingBox side="bottom" active={false}>
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
}

export default WriteBox;
