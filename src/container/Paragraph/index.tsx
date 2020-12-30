import React from "react";
import { FlexView, Text } from "../../components";

interface Props {
  header?: string;
  content: string;
};

const Paragraph: React.FC<Props> = ({ header, content }) => {
  return <FlexView direction="column" gap="10px">
    {header && <Text size="24px">{header}</Text>}
    <Text size="18px">{content}</Text>
  </FlexView>
}

export default Paragraph;
