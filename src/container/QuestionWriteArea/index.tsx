import React from "react";
import WriteBox from "../WriteBox";

const QuestionWriteArea = () => {

  // Get data
  const readQuestion = (data: string, file?: FileList | null | undefined) => {
    console.log(data)
    if (file)
      console.log(file);
  }

  // --- Write question --- 
  return <WriteBox active={true} onSubmit={readQuestion} />
}

export default QuestionWriteArea;