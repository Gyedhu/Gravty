import React from "react";

// Components
import {
  FlexView,
  Text
} from "../../components";

// types
import { ParagraphProps } from "../../types/pageElements";

const Paragraph: React.FC<ParagraphProps> = ({ header, intent, content }) =>
  <FlexView direction="column" gap="10px">
    {header && <Text size="24px">{header}</Text>}
    <Text alignJustify size="18px">
      {intent && <> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </>}
      {content}
    </Text>
  </FlexView>

export default Paragraph; 
