import React from "react";
import { Button, FlexView } from "../../components";
import Paragraph from "../Paragraph";

const PageWriter = () => {
  return <FlexView direction="column">
    <Paragraph
      header="What is Pages?"
      content="Page are a tool to make an information page with a set of data"
    />
    <Paragraph
      content="Your can write your ideas thoughts and articles or other informations as pages here"
    />
    <Paragraph content="You can attach images, links, lists and other media items" />
    <Paragraph content="You can post those in internet for share to the world and also you can share those with your friends in your friends list" />

    <FlexView direction="column" paddingVertical="20px">
      <Button border className="ri-file-line" width="200px" title="Create new page" />
    </FlexView>

  </FlexView>
}

export default PageWriter;
