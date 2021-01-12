import React, { memo, useEffect } from "react";
import "firebase/firestore";
import { useHistory } from "react-router-dom";

// component
import { Button, FlexView } from "../../components";

// container
import { Title, QuestionList, View } from "../../container";

// type 
import useUploadsDatabaseMethods from "../../firebase/useUploadDatabaseMethods";


interface UploadListProps {
  type: "questions" | "pages";
};

const UploadList: React.FC<UploadListProps> = ({ type }) => {

  // Fetch question methods
  const { fetchQuestion } = useUploadsDatabaseMethods();

  // router
  const router = useHistory();

  // change router method
  const ChangeRoute =
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      router.replace(`/upload-list/${event.currentTarget.value}`);
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


    {/* Navigation */}
    <FlexView gap="30px" justify="space-between">
      <FlexView gap="30px" popup>

        {/* Goto questions */}
        <Button onClick={ChangeRoute}
          active={type === "questions"}
          value="questions"
          title="Questions"
        />

        {/* View pages */}
        <Button onClick={ChangeRoute}
          active={type === "pages"}
          value="pages"
          title="Pages"
        />
      </FlexView>


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
      type === "questions" && <QuestionList />
    }

  </View>
}

export default memo(UploadList);
