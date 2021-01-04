import React from "react";

// Components
import {
  FlexView,
  Text
} from "../../components"; 
import { ParagraphProps } from "../PageElementTypes";

const Paragraph: React.FC<ParagraphProps> = ({ header, content }) =>
  <FlexView direction="column" gap="10px">
    {header && <Text size="24px">{header}</Text>}
    <Text size="18px">{content}</Text>
  </FlexView>


export default Paragraph;
