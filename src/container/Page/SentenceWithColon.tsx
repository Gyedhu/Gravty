import React from "react";

// components
import { FlexView, Text } from "../../components";

// types
import { SentenceWithColonProps } from "../../types/pageElements";

const SentenceWithColon: React.FC<SentenceWithColonProps> = ({ beforeColon, sentence }) => {
  return <FlexView>
    <Text alignJustify size="18px">
      <b>{beforeColon}:</b> {sentence}
    </Text>
  </FlexView>
}

export default SentenceWithColon;
