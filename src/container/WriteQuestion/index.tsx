import React from "react";

// Components
import { FlexView } from "../../components";

// Containers
import { Paragraph, QuestionWriteBox } from "..";
import { usePushQuestions } from "../../firebase";

const WriteQuestion = () => {

  // Upload method
  const { uploadQuestion } = usePushQuestions();

  // Get data
  const _uploadQuestion = async (data: string, file?: Blob | null) => {
    
    try {
      uploadQuestion({
        content: data,
        imageFile: file,
        timestamp: new Date()
      });
    }
    catch (error) {
      alert(error.message);
    }
  }

  // --- Write question --- 
  return <FlexView direction="column">

    <Paragraph
      content="Write your question and upload in internet for share to the world..."
    />

    <QuestionWriteBox onSubmit={_uploadQuestion} />
  </FlexView>
}

export default WriteQuestion
  ;