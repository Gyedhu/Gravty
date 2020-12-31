import React from "react";
import { Button, FlexView, FloatingBox, TextArea } from "../../components";
import { Paragraph } from "../../container";
import Header from "../../container/Header";
import View from "../../container/View";

const PageEditor = () => {

  const [selectElement, setSelectElement] = React.useState(false);
  const [write, setWrite] = React.useState(false);

  const gotoWrite = () => {
    setWrite(prev => !prev)
    setSelectElement(false);
  };

  const gotoSelectElemenet = () => setSelectElement(prev => !prev)

  return <View >
    <Header
      title="Editor"
      subTitle="Write your page"
    />

    <FlexView gap="10px" justify="space-between" wrap="wrap">

      <FlexView
        fill="#ffffff"
        gap="10px"
        paddingHorizontal="15px"
        paddingVertical="15px"
        radius="10px"
        shadow
      >
        <Button onClick={gotoSelectElemenet} className="ri-add-circle-line" toolTip="Add Element" />
      </FlexView>

      <FlexView
        fill="#ffffff"
        gap="10px"
        paddingHorizontal="15px"
        paddingVertical="15px"
        radius="10px"
        shadow
      >
        <Button className="ri-slideshow-2-line" toolTip="View page" />
        <Button className="ri-question-line" toolTip="help" />
      </FlexView>
    </FlexView>

    <FloatingBox side="center" active={selectElement}>
      <View>
        <FlexView direction="column" gap="30px" paddingHorizontal="20px" paddingVertical="20px" popup radius="10px" shadow>
          <FlexView justify="space-between">
            <Paragraph
              header="Elements"
              content="Select one you want to add"
            />

            <Button className="ri-close-circle-line" onClick={() => setSelectElement(false)} />
          </FlexView>

          <FlexView direction="column" gap="10px" maxHeight="250px">
            <Button border onClick={gotoWrite} rounded title="Header" width="fit-content" />
            <Button border onClick={gotoWrite} rounded title="Pagragraph" width="fit-content" />
            <Button border onClick={gotoWrite} rounded title="Paragraph with header" width="fit-content" />
            <Button border onClick={gotoWrite} rounded title="List" width="fit-content" />
            <Button border onClick={gotoWrite} rounded title="Image" width="fit-content" />
            <Button border onClick={gotoWrite} rounded title="Audio" width="fit-content" />
          </FlexView>
        </FlexView>
      </View>
    </FloatingBox >

    <FloatingBox side="bottom" active={write}>
      <View>
        <TextArea placeholder="Write your content" />
        <FlexView>
          <Button background fit title="Finished" />
          <Button className="ri-attachment-2" title="Attach" />
          <Button className="ri-delete-bin-line" title="Clear" />
          <Button
            className="ri-close-circle-line"
            onClick={gotoWrite}
          />
        </FlexView>
      </View>
    </FloatingBox>
  </View >
}

export default PageEditor;
