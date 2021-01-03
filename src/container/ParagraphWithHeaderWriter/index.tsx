import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, FlexView, TextArea } from "../../components";
import { addPageData } from "../../redux/page/action";
import { PageState } from "../../redux/page/type";
import { setCurrentWriting } from "../../redux/pageEditor/action";
import { State } from "../../redux/store";
import { UserDataState } from "../../redux/userData/type";
import { PARAGRAPH, ParagraphTypes } from "../PageListMap/types";
import View from "../View";

const ParagraphWithHeaderWriter = () => {

  // --- Local State ---
  const [header, setHeader] = React.useState("");
  const [paragraph, setParagraph] = React.useState("");
  const [currentTypingField, setCurrentTypingField] = React.useState<EventTarget & HTMLTextAreaElement | null>(null);


  // --- State and Dispatch ---    
  const dispatch = useDispatch();

  // --- On Fucus --- 
  // On focus we are setting the current typing field in the state
  // On the clear button click the element stored in the 'currentTypingField' will be cleared
  const focus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setCurrentTypingField(event.currentTarget);
  }

  // --- Read header --- 
  const readHeader = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setHeader(event.currentTarget.value);

  // --- Read Paragraph ---  
  const readParagraph = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setParagraph(event.currentTarget.value);


  // --- Submit ---
  const submit = () => {

    if (header && paragraph) {

      const newParagraph: ParagraphTypes = {
        contentType: PARAGRAPH,
        content: paragraph,
        header: header
      };

      // Set data in state
      dispatch(addPageData(newParagraph));
      // Close all fields
      dispatch(setCurrentWriting(""));

    }
  }

  // Clear field
  const clearField = () => {
    // Clearing the currentFocused field
    // It would be stored in the currentTypingField variable in state
    // We can use name property of the element
    if (currentTypingField?.name === "paragraph") {
      setParagraph("");
    } else {
      setHeader("");
    }
  }


  return <View type="medium">
    <FlexView direction="column" gap="10px">

      {/* Heading */}
      <TextArea
        name="header"
        onChange={readHeader}
        onFocus={focus}
        placeholder="Heading"
        size={1}
        type="dashed"
      />

      {/* Paragraph */}
      <TextArea
        name="paragraph"
        onChange={readParagraph}
        onFocus={focus}
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

export default ParagraphWithHeaderWriter;
