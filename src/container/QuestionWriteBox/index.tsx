import React from "react";
import { useDispatch } from "react-redux";

// State, Reducer Actions
// import { State } from "../../redux/store";
// import { PageEditorState } from "../../redux/pageEditor/type";
import { setWriteBox } from "../../redux/pageEditor/action";

// Utilities
import { filePicker } from "../../utility";

// Components
import {
  Button,
  FlexView,
  TextArea
} from "../../components";

interface Props {
  active?: boolean;
  onSubmit: (data: string, file?: FileList | null) => void
}

const QuestionWriteBox: React.FC<Props> = ({ active, onSubmit }) => {

  // State 
  const [data, setData] = React.useState("");
  const [file, setFile] = React.useState<FileList | null>();
  const [attachImageUrl, setAttachImageUrl] = React.useState("");

  // dispatch
  const dispatch = useDispatch();

  // --- Clear area ---
  const clearTextArea = () => setData("");


  // Get writeBox from state
  // const { writeBox } = useSelector<State, PageEditorState>(state => state.pageEditor);

  // --- Submit data ---
  const submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (data.trim() !== "") {
      onSubmit(data, file);
    }
  }

  // --- Detach media --- 
  const detachMedia = () => {
    setAttachImageUrl("");
    setFile(null);
  };

  // --- writeBox toggler ---
  const writeBoxToggler = () => dispatch(setWriteBox(false));

  // --- Read data ---
  const readData = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setData(event.target.value);


  // --- Attach media ---
  const attachMedia = async () => {

    // File operations
    try {
      // Get the file
      let file = await filePicker();
      // Store file in state
      setFile(file as FileList);
      // Make url
      let url = URL.createObjectURL(file);
      // Store url in state
      setAttachImageUrl(url);

    } catch (error) {
      // Error
      alert(error);
    }
  }

  return <FlexView direction="column" gap="5px" paddingVertical="20px">

    {/* Show image only if something attached */}
    {attachImageUrl && <img src={attachImageUrl} alt="selected" width="200" />}

    {/* Textarea */}
    <TextArea
      onChange={readData}
      placeholder="Write your question"
      value={data}
      size={5}
      type="solid"
    />

    {/* Buttons */}
    <FlexView gap="10px" paddingVertical="10px">

      {/* Done button */}
      <Button
        background
        fit
        onClick={submit}
        title="Done"
      />

      {/* Attach media button */}
      <Button
        className={attachImageUrl ? "ri-eraser-line" : "ri-attachment-2"}
        title={attachImageUrl ? "Detach" : "Attach"}
        onClick={attachImageUrl ? detachMedia : attachMedia}
      />

      {/* Clear text area button */}
      <Button
        className="ri-delete-bin-line"
        title="Clear"
        onClick={clearTextArea}
      />

      {
        // Close button
        !active &&
        <Button
          className="ri-close-circle-line"
          onClick={writeBoxToggler}
        />
      }
    </FlexView>
  </FlexView>
}

export default QuestionWriteBox;
