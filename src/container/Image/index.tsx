import React from "react";

// Components
import {
  FlexView,
  UrlImage,
  Text
} from "../../components";
import { ImageProps } from "../PageElementTypes";

const Image: React.FC<ImageProps> = ({ url, header, fit, footer }) => {
  return <FlexView direction="column" gap="10px">
    <Text>{header}</Text>
    <UrlImage fit={fit === "fit-in-both"} url={url}
      height="200px"
    />
    <Text size="15px">{footer}</Text>
  </FlexView>
}

export default Image;
