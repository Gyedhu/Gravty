import React from "react";
import { Button, FlexView } from "../../components";
import { Header, QuestionWriteArea, View } from "../../container";

const Write = () => {

  // Current page list
  const [currentPage, setCurrentPage] = React.useState([true, false]);

  // Select current page
  const toggleActive = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    // map throught current page list
    const newCurrentPageList = currentPage.map((_, index) =>
      `${index}` === event.currentTarget.value
        ? true  // setting selected page true
        : false // setting all other pages false
    );

    // Save the final result in state
    setCurrentPage(newCurrentPageList);
  }

  return <View>

    <Header
      title="Write"
      subTitle="Write your questions, ideas and thoughts"
    />

    {/* Button set question ~ pages */}
    <FlexView gap="20px">
      <Button active={currentPage[0]} onClick={toggleActive} title="Questions" value="0" />
      <Button active={currentPage[1]} onClick={toggleActive} title="Pages" value="1" />
    </FlexView>

    {
      // question write area
      currentPage[0] && <QuestionWriteArea />
    }

    {
      // Page write area
      currentPage[1] && <p>~page is not ready</p>
    }

  </View>
}

export default Write;
