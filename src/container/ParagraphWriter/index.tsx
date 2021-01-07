import React from "react";
import { Button, FlexView, TextArea } from "../../components";
import { useWriterMethods } from "../hooks";
import { PARAGRAPH } from "../PageElementTypes";
import View from "../View";

const ParagraphWriter = () => {

  // Get write methods
  const { onClear, onFocus, onSubmit } = useWriterMethods();

  // --- Local State --- 
  const [paragraph, setParagraph] = React.useState("");

  // --- Read Paragraph ---  
  const readParagraph = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setParagraph(event.currentTarget.value);

  // --- Submit ---
  const _onSubmit = () => {

    // check the paragraph is given
    if (paragraph) {

      onSubmit({
        contentType: PARAGRAPH,
        content: paragraph
      });

    }
  }

  return <View type="medium">
    <FlexView direction="column" gap="10px">

      {/* Paragraph */}
      <TextArea
        onChange={readParagraph}
        onFocus={onFocus}
        placeholder="Paragraph"
        size={5}
        type="dashed"
      />


      <FlexView gap="10px">
        <Button
          border
          onClick={_onSubmit}
          className="ri-check-double-line"
          title="DONE"
        />
        <Button
          border
          onClick={onClear}
          className="ri-delete-bin-line"
          title="CLEAR"
        />
      </FlexView>

    </FlexView>
  </View>
}

export default ParagraphWriter;
