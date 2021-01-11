import React, { useEffect, useRef } from "react";

// Components
import { FlexView, TextArea, Input, Text } from "../../components";

// Containers
import { WriterButtonSet, View } from "..";

// Hooks
import { useWriterMethods } from "../hooks";
import { LIST } from "../../types/pageMapables";

// Types  
const WriteList = () => {

  // Get write method
  const { onClear, onFocus, onSubmit } = useWriterMethods();

  // --- Local State --- 
  const [list, setList] = React.useState("");
  const [header, setHeader] = React.useState("");
  const [type, setType] = React.useState<ListStyleTypes>("decimal");
  const TextAreaRef = useRef<HTMLTextAreaElement | null>(null);

  // Automatic focus
  useEffect(() => TextAreaRef.current?.focus(), []);

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
        ref={TextAreaRef}
        size={5}
        type="dashed"
        value={list}
      />


      {/* Submit and Clear */}
      <WriterButtonSet
        onClear={onClear}
        onSubmit={_onSubmit}
      />

    </FlexView>
  </View>
}

export default WriteList;
