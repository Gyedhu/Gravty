import React from "react";
import { useDispatch } from "react-redux";
import { Button, FlexView, TextArea, UrlImage } from "../../components";
import { clearNotification, setNotification } from "../../redux/notification/action";
import { filePicker } from "../../utility";
import Paragraph from "../Paragraph";

const QuestionWriteArea = () => {

  // State 
  const [question, setQuestion] = React.useState("");
  const [attachImage, setAttachImage] = React.useState("");

  // Dispatch
  const dispatch = useDispatch();

  // Notification
  const notification = (message: string) => {
    dispatch(setNotification(message));

    // Close notification after 2 seconds
    setTimeout(() => {
      dispatch(clearNotification());
    }, 2000);
  }



  // Reference for textarea
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  // Adding side-effect to set the textArea focused in compoent mount
  React.useEffect(() => {
    if (textAreaRef.current)
      textAreaRef.current.focus();
  }, []);


  // --- Read question ---
  const readQuestion = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

    // set data in state
    setQuestion(event.target.value);
  }


  // --- Clear area ---
  const clear = () => {

    // Set empty string in state
    setQuestion("");
  }

  // --- Remove attached media ---
  const removeAttachedMedia = () => {
    setAttachImage("");
  }


  // --- Upload question ---
  const uploadQuestion = () => {

    // Checking the question is blank or not
    if (question.trim()) {

      // database operation
      notification(question);

      // clear field attached file
      clear();
      removeAttachedMedia();
    }
    else {

      // If the question is blank pop error
      notification("Write something!");
    }

  }


  // --- Attach media ---
  const attachMedia = async () => {

    // File operations
    try {

      // Get the file
      let file = await filePicker();
      let url = URL.createObjectURL(file);
      setAttachImage(url);

    } catch (error) {

      // Error
      alert(error);
    }
  }


  // --- Write question --- 
  return <FlexView direction="column" gap="10px">


    {/* Attached media */}
    {

      // Only display if something is attached
      attachImage && <FlexView minHeight="200px">
        <UrlImage fit url={attachImage} width="200px" />
      </FlexView>
    }

    <Paragraph
      content="Write your question and upload ... get answered :)"
    />


    {/* Text area */}
    <TextArea
      onChange={readQuestion}
      placeholder="Write your question"
      ref={textAreaRef}
      value={question}
    />

    <FlexView justify="flex-end" gap="10px">

      {/* Upload button */}
      <Button
        background
        border
        fit
        onClick={uploadQuestion}
        title="Upload"
        value={question}
      />


      {/* Attach media button */}
      {
        !attachImage
          ? <Button className="ri-link" onClick={attachMedia} title="Attach" />
          : <Button className="ri-close-line" onClick={removeAttachedMedia} title="Remove" />
      }

      {/* Clear area button */}
      <Button className="ri-delete-bin-line" onClick={clear} title="Clear" />

    </FlexView>
  </FlexView >
}

export default QuestionWriteArea;