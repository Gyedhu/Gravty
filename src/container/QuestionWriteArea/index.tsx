import React from "react";
import { FlexView } from "../../components";
import Paragraph from "../Paragraph";
import WriteBox from "../WriteBox";

const QuestionWriteArea = () => {

  // Get data
  const readQuestion = (data: string, file?: FileList | null | undefined) => {
    console.log(data)
    if (file)
      console.log(file);
  }

  // --- Write question --- 
  return <FlexView direction="column">
    <Paragraph
      content="Write your question and upload in internet for share to the world..."
    />
    <WriteBox active={true} onSubmit={readQuestion} />
  </FlexView>
}

export default QuestionWriteArea;