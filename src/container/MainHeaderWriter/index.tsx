import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, FlexView, TextArea } from "../../components";
import { addPageHeader } from "../../redux/page/action";
import { PageState } from "../../redux/page/type";
import { setCurrentWriting } from "../../redux/pageEditor/action";
import { State } from "../../redux/store";
import { UserDataState } from "../../redux/userData/type";
import { useWriterMethods } from "../hooks";
import { PAGE_HEADER, PARAGRAPH } from "../PageElementTypes";
import View from "../View";



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

  </View>
}

export default MainHeaderWriter;
