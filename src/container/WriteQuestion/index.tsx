import React from "react";

// Components
import { FlexView } from "../../components";

// Containers
import { Paragraph, QuestionWriteBox } from "..";

const WriteQuestion
 = () => {

  // Get data
  const readQuestion = (data: string, file?: FileList | null | undefined) => {
    console.log(data);
    if (file)
      console.log(file);
  }

  // --- Write question --- 
  return <FlexView direction="column">

    <Paragraph
      content="Write your question and upload in internet for share to the world..."
    />

    <QuestionWriteBox active={true} onSubmit={readQuestion} />
  </FlexView>
}

export default WriteQuestion
;