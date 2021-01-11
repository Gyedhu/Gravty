import React, { useEffect, useRef } from "react";

// Components
import { FlexView, TextArea } from "../../components";

// Containers
import { WriterButtonSet, View } from "..";

// Hooks
import { useWriterMethods } from "../hooks";
import { PARAGRAPH } from "../../types/pageMapables";

// Types 



const ParagraphWithHeaderWriter = () => {

  // Get write methods
  const { onClear, onFocus, onSubmit } = useWriterMethods();

  // --- Local State ---
  const [header, setHeader] = React.useState("");
  const [paragraph, setParagraph] = React.useState("");
  const TextAreaRef = useRef<HTMLTextAreaElement | null>(null);

  // Automatic focus
  useEffect(() => TextAreaRef.current?.focus(), []);

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

      {/* Heading text field */}
      <TextArea
        name="header"
        onChange={readHeader}
        onFocus={onFocus}
        placeholder="Heading"
        ref={TextAreaRef}
        size={1}
        type="dashed"
      />

      {/* Paragraph text field */}
      <TextArea
        name="paragraph"
        onChange={readParagraph}
        onFocus={onFocus}
        placeholder="Paragraph"
        size={5}
        type="dashed"
      />


      {/* Submit and Clear */}
      <WriterButtonSet
        onClear={onClear}
        onSubmit={_onSubmit}
      />

    </FlexView>
  </View>
}

export default ParagraphWithHeaderWriter;
