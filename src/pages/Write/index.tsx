import React from "react";
import { useHistory } from "react-router-dom";

// Components
import {
  Button,
  FlexView
} from "../../components";

// Containers
import {
  Header,
  WritePage as WritePage,
  WriteQuestion,
  View
} from "../../container";

// Write types
interface Props {
  type: "question" | "page" | null
}

const Write: React.FC<Props> = ({ type }) => {

  // Current page list
  const history = useHistory();

  // Select current page
  const selectWriteType = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    history.replace(`/write/${event.currentTarget.value}`);
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
        onClick={selectWriteType}
        title="Questions"
        value="question"
      />

      <Button
        active={type === "page"}
        onClick={selectWriteType}
        title="Pages"
        value="page"
      />

    </FlexView>

    {
      // question write area
      type === "question" && <WriteQuestion />
    }

    {
      // Page write area
      type === "page" && <WritePage />
    }

  </View>
}

export default Write;
