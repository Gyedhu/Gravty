import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, FlexView, TextArea } from "../../components";
import { addPageHeader } from "../../redux/page/action";
import { PageState } from "../../redux/page/type";
import { State } from "../../redux/store";
import { UserDataState } from "../../redux/userData/type";
import View from "../View";
 

const MainHeaderWriter = () => {

  // --- Local State --- 
  const [mainHeader, setMainHeader] = React.useState("");
  const [subHeader, setSubHeader] = React.useState("");
  const [currentTypingField, setCurrentTypingField] = React.useState<EventTarget & HTMLTextAreaElement | null>(null);

  // --- State and Dispatch ---  
  const { header } = useSelector<State, PageState>(state => state.page);
  const { name, imageUrl } = useSelector<State, UserDataState>(state => state.userData);
  const dispatch = useDispatch();

  // --- On Fucus --- 
  // On focus we are setting the current typing field in the state
  // On the clear button click the element stored in the 'currentTypingField' will be cleared
  const focus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setCurrentTypingField(event.currentTarget);
  }

  // --- Read main header --- 
  const readMainHeader = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMainHeader(event.currentTarget.value);

  // --- Read sub header --- 
  const readSubHeader = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setSubHeader(event.currentTarget.value);

  // --- Submit ---
  const submit = () => {

    // Set only if main header in given
    if (mainHeader) {
      const newHeader: typeof header = {
        auther: name,
        date: new Date().toLocaleString(),
        title: mainHeader,
        subTitle: subHeader,
        imageUrl: imageUrl
      };

      // Setting the new header in redux state
      dispatch(addPageHeader(newHeader));
    }
  }

  // Clear field
  const clearField = () => {
    // Clearing the currentFocused field
    // It would be stored in the currentTypingField variable in state
    // We can use name property of the element
    if (currentTypingField?.name === "main") {
      setMainHeader("");
    } else {
      setSubHeader("");
    }
  }

  return <View type="medium">
    <FlexView direction="column" gap="10px">

      {/* Main header write field */}
      <TextArea
        align="center"
        fontSize="42px"
        name="main"
        onChange={readMainHeader}
        onFocus={focus}
        placeholder="Main Heading"
        size={1}
        type="dashed"
        value={mainHeader}
      />

      {/* Sub header write field */}
      <TextArea
        align="center"
        name="sub"
        onChange={readSubHeader}
        onFocus={focus}
        placeholder="Sub Heading (Optional)"
        size={1}
        type="dashed"
        value={subHeader}
      />
    </FlexView>

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

  </View>
}

export default MainHeaderWriter;
