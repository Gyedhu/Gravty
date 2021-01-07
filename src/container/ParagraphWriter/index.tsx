import React from "react";

// Components
import { FlexView, TextArea } from "../../components";

// Containers
import { WriterButtonSet, View } from "..";

// Hooks
import { useWriterMethods } from "../hooks";

// Types
import { PARAGRAPH } from "../PageElementTypes";


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

      {/* Submit and Clear */}
      <WriterButtonSet
        onClear={onClear}
        onSubmit={_onSubmit}
      />

    </FlexView>
  </View>
}

export default ParagraphWriter;
