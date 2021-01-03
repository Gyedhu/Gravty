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
  setSelectElementBox, setWriteBox
} from "../../redux/pageEditor/action";


// SelectButtonProps 
interface SelectButtonProps {
  title: string;
}

const SelectButton: React.FC<SelectButtonProps> = ({ title }) => {

  // dispatch
  const dispatch = useDispatch();


  // --- selectElement ---
  const selectElement = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(setCurrentWriting(event.currentTarget.value));
    dispatch(setSelectElementBox(false));
  }

  // Button
  return <Button
    border
    rounded
    width="fit-content"
    onClick={selectElement}
    title={title}
    value={title.toLocaleLowerCase()}
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
    <View>
      <FlexView direction="column" gap="30px" paddingHorizontal="20px" paddingVertical="20px" popup radius="10px" shadow>

        <FlexView justify="space-between">
          <Paragraph header="Elements" content="Select one you want to add" />
          <Button className="ri-close-circle-line" onClick={selectElementBoxToggler} />
        </FlexView>

        <FlexView direction="column" gap="10px" maxHeight="250px">
          <SelectButton title="Paragraph-with-header" />
          <SelectButton title="Paragraph" />
          <SelectButton title="List" />
          <SelectButton title="Image" />
        </FlexView>

      </FlexView>
    </View>
  </FloatingBox>
}

export default PageEditorElemenetSelector
