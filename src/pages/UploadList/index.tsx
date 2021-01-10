import React, { memo } from "react";
import "firebase/firestore";
import { useHistory } from "react-router-dom";

// component
import { Button, FlexView } from "../../components";

// container
import { Header, QuestionList, View } from "../../container";

// type 
import useUploadsDatabaseMethods from "../../firebase/useUploadsDatabaseMethods";


interface UploadListProps {
  type: "questions" | "pages";
};

const UploadList: React.FC<UploadListProps> = ({ type }) => {

  const { fetchQuestion } = useUploadsDatabaseMethods();

  const router = useHistory();

  const ChangeRoute = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    router.replace(`/upload-list/${event.currentTarget.value}`);
  }

  return <View type="medium">

    {/* Title */}
    <Header
      center
      fancy
      title="Your uploads"
      subTitle="Edit, Delete, Share your uploads"
    />


    {/* Navigation */}
    <FlexView gap="30px" justify="space-between">
      <FlexView gap="30px" popup>
        <Button onClick={ChangeRoute}
          active={type === "questions"}
          value="questions"
          title="Questions"
        />

        <Button onClick={ChangeRoute}
          active={type === "pages"}
          value="pages"
          title="Pages"
        />
      </FlexView>

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
