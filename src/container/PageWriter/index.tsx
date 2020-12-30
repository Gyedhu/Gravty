import React from "react";
import { useDispatch } from "react-redux";
import { Button, FlexView } from "../../components";
import { clearNotification, setNotification } from "../../redux/notification/action";
import List from "../List";
import Paragraph from "../Paragraph";

const PageWriter = () => {

  // Dispatch
  const dispatch = useDispatch();

  // Notificaiton
  const notification = (message: string) => {
    dispatch(setNotification(message));

    // Close notification after 2 seconds
    setTimeout(() => {
      dispatch(clearNotification());
    }, 2000);
  }

  // Goto writer
  const gotoWriter = () => {
    notification("Going to writer");
  }

  return <FlexView direction="column">
    <Paragraph
      header="What is Pages?"
      content="Page are a tool to make an information page with a set of data"
    />

    <List
      listItems={[
        "Your can write your ideas thoughts and articles or other informations as pages here",
        "You can attach images, links, lists and other media items",
        "You can post those in internet for share to the world and also you can share those with your friends in your friends list"
      ]}
      type="decimal"
    />


    <FlexView direction="column" paddingVertical="20px">
      <Button border className="ri-file-line" onClick={gotoWriter} width="200px" title="Create new page" />
    </FlexView>

  </FlexView>
}

export default PageWriter;
