import React from "react";

// components
import { Button, FlexView } from "../../components";

// container
import { List, Paragraph } from "..";

// types

const WritePage = () => {
  return <FlexView direction="column">

    {/* Title */}
    <Paragraph
      header="What is Pages?"
      content="Page are a tool to make an information page with a set of data"
    />

    {/* List of features */}
    <List
      listItems={[
        "Your can write your ideas thoughts and articles or other informations as pages here",
        "You can attach images, links, lists and other media items",
        "You can post those in internet for share to the world and also you can share those with your friends in your friends list"
      ]}
      type="decimal"
    />


    {/* Create new document button */}
    <FlexView direction="column" paddingVertical="20px">
      <Button border className="ri-file-line" to="/write/page-editor" width="200px" title="Create new page" />
    </FlexView>

  </FlexView>
}

export default WritePage;
