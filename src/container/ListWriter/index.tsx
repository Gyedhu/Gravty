import React from "react";
import { useDispatch } from "react-redux";
import { Button, FlexView, Input, Text, TextArea } from "../../components";
import { addPageData } from "../../redux/page/action";
import { setCurrentWriting } from "../../redux/pageEditor/action";
import { LIST, ListStyleTypes, ListTypes } from "../PageElementTypes";
import View from "../View";

const ListWriter = () => {

  // --- Local State --- 
  const [list, setList] = React.useState("");
  const [header, setHeader] = React.useState("");
  const [type, setType] = React.useState<ListStyleTypes>("decimal");
  const [currentTypingField, setCurrentTypingField] = React.useState<EventTarget & HTMLTextAreaElement | null>(null);



  // --- On Fucus --- 
  // On focus we are setting the current typing field in the state
  // On the clear button click the element stored in the 'currentTypingField' will be cleared
  const focus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setCurrentTypingField(event.currentTarget);
  }

  // --- State and Dispatch ---    
  const dispatch = useDispatch();

  // --- Read header --- 
  const readHeader = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setHeader(event.currentTarget.value);

  // --- Read Paragraph ---  
  const readList = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setList(event.currentTarget.value);


  // --- Submit ---
  const submit = () => {

    if (list) {

      const listArray = list.split(",");

      const newList: ListTypes = {
        contentType: LIST,
        title: header,
        listItems: listArray,
        type: type
      };

      // Set data in state
      dispatch(addPageData(newList));
      // // Close all fields
      dispatch(setCurrentWriting(""));

    }
  }

  // Clear field
  const clearField = () => {
    // Clearing the currentFocused field
    // It would be stored in the currentTypingField variable in state
    // We can use name property of the element
    if (currentTypingField?.name === "list") {
      setList("");
    } else {
      setHeader("");
    }
  }


  return <View type="medium">
    <FlexView direction="column" gap="10px">
      <Text>Select a list style type</Text>
      <Input
        options={[
          "decimal",
          "rounded",
          "square",
          "upper-alpha",
          "lower-alpha"
        ]}
        onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setType(event.currentTarget.value as ListStyleTypes)}
        select
      />

      {/* header */}
      <TextArea
        name="header"
        onChange={readHeader}
        onFocus={focus}
        placeholder="Header (optional)"
        size={1}
        type="dashed"
        value={header}
      />

      {/* List */}
      <TextArea
        name="list"
        onChange={readList}
        onFocus={focus}
        placeholder="Write your list items separeted by comma"
        size={5}
        type="dashed"
        value={list}
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

export default ListWriter;
