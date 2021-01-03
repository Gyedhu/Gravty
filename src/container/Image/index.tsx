import React from "react";

// Components
import {
  FlexView,
  UrlImage,
  Text
} from "../../components";

interface Props {
  url: string;
  header?: string;
  footer?: string;
  fit?: boolean;
}

const Image: React.FC<Props> = ({ url, header, fit, footer }) => {
  return <FlexView direction="column" gap="10px">
    <Text>{header}</Text>
    <UrlImage fit={fit} url={url}
      height="200px"
    />
    <Text size="15px">{footer}</Text>
  </FlexView>
}

export default Image;
