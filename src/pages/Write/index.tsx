import React from "react";
import { useHistory } from "react-router-dom";
import { Button, FlexView } from "../../components";
import { Header, PageWriter, QuestionWriteArea, View } from "../../container";

interface Props {
  type: "question" | "page"
}

const Write: React.FC<Props> = ({ type }) => {

  // Current page list
  const history = useHistory();

  // Select current page
  const toggleActive = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    history.replace(`/${event.currentTarget.value}`);
  }

  return <View>

    <Header
      title="Write"
      subTitle="Write your questions, ideas and thoughts"
    />

    {/* Button set question ~ pages */}
    <FlexView gap="20px">

      <Button
        active={type === "question"}
        onClick={toggleActive}
        title="Questions"
        value="question"
      />

      <Button
        active={type === "page"}
        onClick={toggleActive}
        title="Pages"
        value="page"
      />

    </FlexView>

    {
      // question write area
      type === "question" && <QuestionWriteArea />
    }

    {
      // Page write area
      type === "page" && <PageWriter />
    }

  </View>
}

export default Write;
