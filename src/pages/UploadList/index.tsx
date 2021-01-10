import React, { memo, useEffect } from "react";
import "firebase/firestore";
import { useHistory } from "react-router-dom";

// component
import { Button, FlexView, Text } from "../../components";

// container
import { QuestionTemplate, View } from "../../container";

// type
import { QuestionState } from "../../redux/question/type";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import useUploadsDatabaseMethods from "../../firebase/useUploadsDatabaseMethods";


interface UploadListProps {
  type: "questions" | "pages";
};

const UploadList: React.FC<UploadListProps> = ({ type }) => {

  const { questions } = useSelector<State, QuestionState>(state => state.question);
  const { fetchQuestion } = useUploadsDatabaseMethods();

  useEffect(() => {

    // Fetch only if there is no questions in state
    // if (!questions.length)
    // fetchQuestion();

  }, [fetchQuestion, questions]);

  const router = useHistory();

  const ChangeRoute = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    router.replace(`/upload-list/${event.currentTarget.value}`);
  }

  return <View type="medium">

    <FlexView align="center" direction="column" paddingVertical="20px">
      <Text bold size="32px">Your Uploads</Text>
      <Text fancy size="18px">Edit, Delete, Share your uploads</Text>
    </FlexView>

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
      questions?.map((value) =>
        <QuestionTemplate
          key={value.id}
          {...value}
        />
      )
    }

    {
      questions.length === 0 &&
      <FlexView direction="column" gap="20px" popup>
        <Text>No Question uploaded so far</Text>
        <Button border title="Write one" to="/write/question" />
      </FlexView>
    }

  </View>
}

export default memo(UploadList);
