import React from "react";
import { useDispatch } from "react-redux";
import { Button, FlexView, TextArea } from "../../components";
import { addPageData } from "../../redux/page/action";
import { setCurrentWriting } from "../../redux/pageEditor/action";
import { PARAGRAPH, ParagraphTypes } from "../PageElementTypes";
import View from "../View";

const ParagraphWriter = () => {

  // --- Local State --- 
  const [paragraph, setParagraph] = React.useState("");


  // --- State and Dispatch ---    
  const dispatch = useDispatch();

  // --- Read Paragraph ---  
  const readParagraph = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setParagraph(event.currentTarget.value);

  // --- Submit ---
  const submit = () => {

    // check the paragraph is given
    if (paragraph) {

      // Create a new paragrap object
      const newParagraph: ParagraphTypes = {
        contentType: PARAGRAPH,
        content: paragraph
      };

      // Set data in redux
      dispatch(addPageData(newParagraph));
      // Reset the currentWritingtool
      dispatch(setCurrentWriting(""));

    }

  }


  // Clear field
  const clearField = () => {
    setParagraph("");
  }


  return <View type="medium">
    <FlexView direction="column" gap="10px">

      {/* Paragraph */}
      <TextArea
        onChange={readParagraph}
        placeholder="Paragraph"
        size={5}
        type="dashed"
      />


      <FlexView gap="10px">
        <Button
          border
          onClick={submit}
          className="ri-check-double-line"
          title="DONE"
        />
        <Button
          border
          onClick={clearField}
          className="ri-delete-bin-line"
          title="CLEAR"
        />
      </FlexView>

    </FlexView>
  </View>
}

export default ParagraphWriter;
