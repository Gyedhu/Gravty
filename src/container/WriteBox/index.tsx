import React from "react";
import {
  Button,
  FlexView,
  FloatingBox,
  Text,
  TextArea
} from "../../components";
import { View } from "..";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/store";
import { PageEditorState } from "../../redux/pageEditor/type";
import { setWriteBox } from "../../redux/pageEditor/action";
import { filePicker } from "../../utility";

interface Props {
  active?: boolean;
  onSubmit: (data: string, file?: FileList | null) => void
}

const WriteBox: React.FC<Props> = ({ active, onSubmit }) => {

  // State 
  const [data, setData] = React.useState("");
  const [file, setFile] = React.useState<FileList | null>();
  const [attachImageUrl, setAttachImageUrl] = React.useState("");

  // dispatch
  const dispatch = useDispatch();

  // Get writeBox from state
  const { writeBox, writeBoxTitle } = useSelector<State, PageEditorState>(
    state => state.pageEditor
  );

  // --- Submit data ---
  const submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (data.trim() !== "") {
      onSubmit(data, file);

      // Clear data
      clearTextArea();
      detachMedia();
    }
  }

  // --- Clear area ---
  const clearTextArea = () => setData("");

  // --- Detach media --- 
  const detachMedia = () => {
    setAttachImageUrl("");
    setFile(null);
  };

  // --- writeBox toggler ---
  const writeBoxToggler = () => dispatch(setWriteBox(false));

  // --- Read data ---
  const readData = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

    // set data in state
    setData(event.target.value);
  }


  // --- Attach media ---
  const attachMedia = async () => {

    // File operations
    try {

      // Get the file
      let file = await filePicker();
      setFile(file as FileList | null);
      let url = URL.createObjectURL(file);
      setAttachImageUrl(url);

    } catch (error) {

      // Error
      alert(error);
    }
  }

  return <FloatingBox side="bottom" active={active ? active : writeBox}><View>

    {attachImageUrl && <img src={attachImageUrl} alt="selected" width="200" />}

    <Text>{writeBoxTitle}</Text>

    <TextArea
      onChange={readData}
      placeholder="Write your content"
      value={data}
    />

    <FlexView gap="10px">
      <Button
        background
        fit
        onClick={submit}
        title="Done"
      />
      <Button
        className={attachImageUrl ? "ri-eraser-line" : "ri-attachment-2"}
        title={attachImageUrl ? "Detach" : "Attach"}
        onClick={attachImageUrl ? detachMedia : attachMedia}
      />
      <Button
        className="ri-delete-bin-line"
        title="Clear"
        onClick={clearTextArea}
      />
      {
        !active &&
        <Button
          className="ri-close-circle-line"
          onClick={writeBoxToggler}
        />
      }
    </FlexView>

  </View></FloatingBox>
}

export default WriteBox;
