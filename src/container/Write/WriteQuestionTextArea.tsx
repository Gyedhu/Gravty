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
  onSubmit: (data: string, file?: File | null, callback?: () => void) => void;
};

const WriteQuestionTextArea: React.FC<Props> = ({ onSubmit }) => {

  // State 
  const [data, setData] = React.useState("");
  const [file, setFile] = React.useState<File | null>();

  // --- Clear area ---
  const clearTextArea = () => setData("");


  // --- Detach media --- 
  const detachMedia = () => {
    setFile(null);
  };

  // --- Submit data ---
  const submit = () => {
    onSubmit(data, file, () => {
      clearTextArea();
      detachMedia();
    });
  }

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
      setFile(file as File);

    } catch (error) {
      // Error
      alert(error);
    }
  }

  return <FlexView direction="column" gap="5px" paddingVertical="20px" popup>

    {/* Show image only if something attached */}
    {file && <img src={URL.createObjectURL(file)} alt="selected" width="250" />}

    {/* Textarea */}
    <TextArea
      onChange={readData}
      placeholder="Write your question"
      value={data}
      size={5}
      type="solid"
    />

    {/* Buttons */}
    <FlexView direction="row-reverse" gap="10px" paddingVertical="10px">

      {/* Done button */}
      <Button
        background
        fit
        className="ri-save-line"
        onClick={submit}
        title="Upload"
      />

      {/* Attach media button */}
      <Button
        background
        className={file ? "ri-link-unlink-m" : "ri-attachment-2"}
        onClick={file ? detachMedia : attachMedia}
      />

      {/* Clear text area button */}
      <Button
        background
        className="ri-eraser-line"
        onClick={clearTextArea}
      />
    </FlexView>
  </FlexView>
}

export default WriteQuestionTextArea;
