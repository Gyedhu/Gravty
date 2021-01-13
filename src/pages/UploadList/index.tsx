import React, { memo, useEffect } from "react";
import "firebase/firestore";
import { useHistory } from "react-router-dom";

// component
import { Button, FlexView } from "../../components";

// container
import { Title, QuestionList, View, ButtonBar } from "../../container";

// type  
import { useFetchQuestion } from "../../firebase";


interface UploadListProps {
  type: "Questions" | "Pages";
};

const UploadList: React.FC<UploadListProps> = ({ type }) => {

  // Fetch question methods
  const fetchQuestion = useFetchQuestion();

  // router
  const router = useHistory();

  // change router method
  const ChangeRoute = (current: string) => {
    router.replace(`/upload-list/${current}`);
  }


  // Fetch Questions
  useEffect(() => { fetchQuestion() }, [fetchQuestion]);

  return <View type="medium">

    {/* Title */}
    <Title
      center
      title="Your uploads"
      subTitle="Edit, Delete, Share your uploads"
    />

    <FlexView justify="space-between">
      {/* Navigation */}
      <ButtonBar
        buttonType="text"
        selectType="toggle"
        onClick={ChangeRoute}
        defaultSelected={type}
        leftSide={[
          "Questions",
          "Pages"
        ]}
      />

      {/* Manaual fetch button */}
      <FlexView popup>
        <Button
          background
          className="ri-refresh-line"
          onClick={fetchQuestion}
          size="15px"
          title="Reload"
        />
      </FlexView>
    </FlexView>

    {
      // List of question 
      type === "Questions" && <QuestionList />
    }

  </View >
}

export default memo(UploadList);
