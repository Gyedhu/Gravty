import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

// Compoenents
import { FlexView, TextArea } from "../../components";

// Redux State - Actions
import { State } from "../../redux/store";
import { UserDataState } from "../../redux/userData/type";

// Containers
import { WriterButtonSet, View } from "..";

// Hooks
import { useWriterMethods } from "../hooks";

// Types  
import { PAGE_TITLE } from "../../types/pageMapables";


const MainHeaderWriter = () => {

  // Get write methods
  const { onClear, onFocus, onSubmit } = useWriterMethods();
  const TextAreaRef = useRef<HTMLTextAreaElement | null>(null);

  // --- Local State --- 
  const [mainHeader, setMainHeader] = useState("");
  const [subHeader, setSubHeader] = useState("");

  // Automatic focus
  useEffect(() => TextAreaRef.current?.focus(), []);

  // --- State and Dispatch ---   
  const { name, imageUrl } = useSelector<State, UserDataState["data"]>(state => state.userData.data);

  // --- Read main header --- 
  const readMainHeader = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setMainHeader(event.currentTarget.value);

  // --- Read sub header --- 
  const readSubHeader = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setSubHeader(event.currentTarget.value);

  // --- Submit ---
  const _onSubmit = () => {

    // Set only if main header in given
    if (mainHeader) {
      onSubmit({
        contentType: PAGE_TITLE,
        auther: name,
        date: new Date().toDateString(),
        title: mainHeader,
        imageUrl: imageUrl,
        subTitle: subHeader
      });

    }
  }

  return <View type="medium">
    <FlexView direction="column" gap="10px">

      {/* Main header write field */}
      <TextArea
        align="center"
        fontSize="42px"
        onChange={readMainHeader}
        onFocus={onFocus}
        placeholder="Main Heading"
        ref={TextAreaRef}
        size={1}
        type="dashed"
        value={mainHeader}
      />

      {/* Sub header write field */}
      <TextArea
        align="center"
        onChange={readSubHeader}
        onFocus={onFocus}
        placeholder="Sub Heading (Optional)"
        size={1}
        type="dashed"
        value={subHeader}
      />
    </FlexView>


    {/* Submit and Clear */}
    <WriterButtonSet
      onClear={onClear}
      onSubmit={_onSubmit}
    />

  </View>
}

export default MainHeaderWriter;
