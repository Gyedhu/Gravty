import React from "react";
import { Paragraph } from "..";
import { Content, Text } from "../../components";

const HeaderNParagraph: React.FC<HeaderNParagraphTypes> = ({ intent, title, paragraph }) => {
  return <Content gap>
    {title && <Text size="24px">{title}</Text>}
    {paragraph && <Paragraph intent={intent} data={paragraph} />}
  </Content>
}

export default HeaderNParagraph;
