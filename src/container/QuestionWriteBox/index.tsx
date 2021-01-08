import React from "react";

// Utilities
import { filePicker } from "../../utility";

// Components
import {
  Button,
  FlexView,
  TextArea
} from "../../components";

interface Props {
  onSubmit: (
    data: string,
    file?: Blob | null
  ) => void
}

const QuestionWriteBox: React.FC<Props> = ({ onSubmit }) => {

  // State 
  const [data, setData] = React.useState("");
  const [file, setFile] = React.useState<Blob | null>();

  // --- Clear area ---
  const clearTextArea = () => setData("");

  // --- Submit data ---
  const submit = () => {
    if (data.trim() !== "") {
      onSubmit(data, file);
    }
  }

  // --- Detach media --- 
  const detachMedia = () => {
    setFile(null);
  };

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
      setFile(file as Blob);

    } catch (error) {
      // Error
      alert(error);
    }
  }

  return <FlexView direction="column" gap="5px" paddingVertical="20px">

    {/* Show image only if something attached */}
    {file && <img src={URL.createObjectURL(file)} alt="selected" width="200" />}

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
        className={file ? "ri-eraser-line" : "ri-attachment-2"}
        title={file ? "Detach" : "Attach"}
        onClick={file ? detachMedia : attachMedia}
      />

      {/* Clear text area button */}
      <Button
        className="ri-delete-bin-line"
        title="Clear"
        onClick={clearTextArea}
      />
    </FlexView>
  </FlexView>
}

export default QuestionWriteBox;
