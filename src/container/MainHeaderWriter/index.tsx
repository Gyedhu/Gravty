import React from "react";
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
import { PAGE_HEADER } from "../PageElementTypes";



const MainHeaderWriter = () => {

  // Get write methods
  const { onClear, onFocus, onSubmit } = useWriterMethods();

  // --- Local State --- 
  const [mainHeader, setMainHeader] = React.useState("");
  const [subHeader, setSubHeader] = React.useState("");

  // --- State and Dispatch ---   
  const { name, imageUrl } = useSelector<State, UserDataState>(state => state.userData);

  // --- Read main header --- 
  const readMainHeader = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMainHeader(event.currentTarget.value);

  // --- Read sub header --- 
  const readSubHeader = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setSubHeader(event.currentTarget.value);

  // --- Submit ---
  const _onSubmit = () => {

    // Set only if main header in given
    if (mainHeader) {

      onSubmit({
        contentType: PAGE_HEADER,
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
