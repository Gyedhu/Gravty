import React from "react";
import {
  useDispatch,
  useSelector
} from "react-redux";

// Components
import {
  Button,
  FlexView,
  FloatingBox
} from "../../components";

// Container
import {
  Paragraph,
  View
} from "..";

// State, Reducers and actions
import { State } from "../../redux/store";
import { PageEditorState } from "../../redux/pageEditor/type";
import {
  setCurrentWriting,
  setSelectElementBox
} from "../../redux/pageEditor/action";
import { IMAGE, LIST, mapableConstants, PARAGRAPH, PARAGRAPH_WITH_HEADER } from "../../types/pageMapables";


// SelectButtonProps 
interface SelectButtonProps {
  title: string;
}

const SelectButton: React.FC<SelectButtonProps> = ({ title }) => {

  // dispatch
  const dispatch = useDispatch();


  // --- selectElement ---
  const selectElement = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { 
    dispatch(setCurrentWriting(event.currentTarget.value as mapableConstants));
    dispatch(setSelectElementBox(false));
  }

  // Button
  return <Button
    border
    rounded
    width="fit-content"
    onClick={selectElement}
    title={title}
    value={title }
  />
}


const PageEditorElemenetSelector = () => {

  // dispatch
  const dispatch = useDispatch();

  // --- selectElementBox toggler ---
  const selectElementBoxToggler = () => {
    dispatch(setSelectElementBox(false));
  }

  // Get selectElementBox from state;
  const { selectElementBox } = useSelector<State, PageEditorState>(state => state.pageEditor);

  return <FloatingBox side="center" active={selectElementBox}>
    <View fill="#ffffff">
      <FlexView direction="column" gap="30px" paddingHorizontal="20px" paddingVertical="20px" popup radius="10px" shadow>

        <FlexView justify="space-between">
          <Paragraph header="Elements" content="Select one you want to add" />
          <Button className="ri-close-circle-line" onClick={selectElementBoxToggler} />
        </FlexView>

        <FlexView direction="column" gap="10px" maxHeight="250px">
          <SelectButton title={PARAGRAPH_WITH_HEADER} />
          <SelectButton title={PARAGRAPH} />
          <SelectButton title={LIST} />
          <SelectButton title={IMAGE} />
        </FlexView>

      </FlexView>
    </View>
  </FloatingBox>
}

export default PageEditorElemenetSelector
