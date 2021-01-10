import React from "react";
import { useSelector } from "react-redux";

// components
import { FlexView, Button, Text } from "../../components";

// container
import { QuestionTemplate } from "../../container";

// types
import { QuestionState } from "../../redux/question/type";
import { State } from "../../redux/store";


const QuestionList = () => {

  // State
  const { questions } = useSelector<State, QuestionState>(state => state.question);

  return <React.Fragment>
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
  </React.Fragment>
}

export default QuestionList;
