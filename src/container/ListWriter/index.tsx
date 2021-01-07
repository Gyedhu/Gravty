import React from "react";
import { useDispatch } from "react-redux";
import { Button, FlexView, Input, Text, TextArea } from "../../components";
import { useWriterMethods } from "../hooks";
import { LIST, ListStyleTypes } from "../PageElementTypes";
import View from "../View";

const ListWriter = () => {

  // Get write method
  const { onClear, onFocus, onSubmit } = useWriterMethods();

  // --- Local State --- 
  const [list, setList] = React.useState("");
  const [header, setHeader] = React.useState("");
  const [type, setType] = React.useState<ListStyleTypes>("decimal");

  // --- Read header --- 
  const readHeader = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setHeader(event.currentTarget.value);

  // --- Read Paragraph ---  
  const readList = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setList(event.currentTarget.value);


  // --- Submit ---
  const _onSubmit = () => {

    if (list) {
      const listArray = list.split(",");

      onSubmit({
        contentType: LIST,
        title: header,
        listItems: listArray,
        type: type
      });
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
        onChange={readHeader}
        onFocus={onFocus}
        placeholder="Header (optional)"
        size={1}
        type="dashed"
        value={header}
      />

      {/* List */}
      <TextArea
        onChange={readList}
        onFocus={onFocus}
        placeholder="Write your list items separeted by comma"
        size={5}
        type="dashed"
        value={list}
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

export default ListWriter;
