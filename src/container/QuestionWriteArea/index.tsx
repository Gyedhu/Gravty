import React from "react";
import { Button, FlexView, TextArea } from "../../components";

const QuestionWriteArea = () => {

  // State for store question
  const [question, setQuestion] = React.useState("");

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


  // --- Upload question ---
  const uploadQuestion = () => {

    // Checking the question is blank or not
    if (question.trim()) {

      // database operation
      alert(question);

      // clear field
      clear();
    }
    else {

      // if the question is blank pop error
      alert("Write something!");
    }

  }


  // --- Attach media ---
  const attachMedia = () => {

    // File operations
    alert("Attach media");
  }

  return <FlexView direction="column" gap="10px">

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
      <Button className="ri-link" onClick={attachMedia} title="Attach" />

      {/* Clear area button */}
      <Button className="ri-delete-bin-line" onClick={clear} title="Clear" />

    </FlexView>
  </FlexView>
}

export default QuestionWriteArea;