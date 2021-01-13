import React from "react";
import { useHistory } from "react-router-dom";

// Containers
import {
  Title,
  WritePage,
  WriteQuestion,
  View,
  ButtonBar
} from "../../container";

// Write types
interface Props {
  type: "Question" | "Page";
};

const Write: React.FC<Props> = ({ type }) => {

  // Current page list
  const history = useHistory();

  // Select current page
  const selectWriteType = (current: string) => {
    history.replace(`/write/${current.toLocaleLowerCase()}`);
  }

  return <View type="medium">

    <Title
      center
      title="Write"
      subTitle="Write your questions, ideas and thoughts"
    />

    {/* Button set question ~ pages */}
    <ButtonBar
      selectType="toggle"
      buttonType="text"
      defaultSelected={type}
      onClick={selectWriteType}
      leftSide={[
        "Question",
        "Page"
      ]}
    />

    {
      // question write area
      type === "Question" && <WriteQuestion />
    }

    {
      // Page write area
      type === "Page" && <WritePage />
    }

  </View>
}

export default Write;
