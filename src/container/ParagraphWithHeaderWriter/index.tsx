import React from "react";
import { Button, FlexView, TextArea } from "../../components";
import { useWriterMethods } from "../hooks";
import { PARAGRAPH } from "../PageElementTypes";
import View from "../View";

const ParagraphWithHeaderWriter = () => {

  // Get write methods
  const { onClear, onFocus, onSubmit } = useWriterMethods();

  // --- Local State ---
  const [header, setHeader] = React.useState("");
  const [paragraph, setParagraph] = React.useState("");

  // --- Read header --- 
  const readHeader = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setHeader(event.currentTarget.value);

  // --- Read Paragraph ---  
  const readParagraph = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setParagraph(event.currentTarget.value);


  // --- Submit ---
  const _onSubmit = () => {

    if (header && paragraph) {

      onSubmit({
        contentType: PARAGRAPH,
        content: paragraph,
        header: header
      });

    }
  } 

  return <View type="medium">
    <FlexView direction="column" gap="10px">

      {/* Heading */}
      <TextArea
        name="header"
        onChange={readHeader}
        onFocus={onFocus}
        placeholder="Heading"
        size={1}
        type="dashed"
      />

      {/* Paragraph */}
      <TextArea
        name="paragraph"
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

export default ParagraphWithHeaderWriter;
