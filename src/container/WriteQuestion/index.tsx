import React from "react";

// Components
import { FlexView } from "../../components";

// Containers
import { Paragraph, QuestionWriteBox } from "..";
import { usePushQuestions } from "../../firebase";

const WriteQuestion = () => {

  const { addQuestion } = usePushQuestions();

  // Get data
  const readQuestion = async (data: string, file?: FileList | null) => {

    try {

      const key = await addQuestion({
        content: data,
        imageFile: file,
        timestamp: new Date()
      });

      console.log(key);

    }
    catch (error) {
      alert(error.message);
    }

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