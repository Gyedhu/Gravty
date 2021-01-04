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
  fit?: "fit-in-both" | "fit-in-width" | null;
}

const Image: React.FC<Props> = ({ url, header, fit, footer }) => {
  return <FlexView  direction="column" gap="10px">
    <Text>{header}</Text>
    <UrlImage fit={fit === "fit-in-both"} url={url}
      height="200px"
    />
    <Text size="15px">{footer}</Text>
  </FlexView>
}

export default Image;
