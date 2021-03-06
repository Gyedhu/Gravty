import React, { ChangeEvent, useEffect, useRef, useState } from "react";

// Components
import { FlexView, TextArea } from "../../components";

// Containers
import { WritePageButton, View } from "..";

// Hooks
import { useWriterMethods } from "../hooks";
import { PARAGRAPH } from "../../types/pageMapables";

// Types  

const WriteParagraph = () => {

  // Get write methods
  const { onClear, onFocus, onSubmit } = useWriterMethods();

  // --- Local State --- 
  const [paragraph, setParagraph] = useState("");
  const TextAreaRef = useRef<HTMLTextAreaElement | null>(null);

  // Automatic focus
  useEffect(() => TextAreaRef.current?.focus(), []);

  // --- Read Paragraph ---  
  const readParagraph = (event: ChangeEvent<HTMLTextAreaElement>) =>
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
        ref={TextAreaRef}
        size={5}
        type="dashed"
      />

      {/* Submit and Clear */}
      <WritePageButton
        onClear={onClear}
        onSubmit={_onSubmit}
      />

    </FlexView>
  </View>
}

export default WriteParagraph;
