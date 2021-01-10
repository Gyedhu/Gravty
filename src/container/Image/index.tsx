import React from "react";

// Components
import {
  FlexView,
  UrlImage,
  Text
} from "../../components";

// types
import { ImageProps } from "../../types/pageElements";

const Image: React.FC<ImageProps> = ({ url, header, fit, footer }) => {
  return <FlexView direction="column" gap="10px">

    {/* Title */}
    <Text>{header}</Text>

    {/* Image */}
    {
      fit !== "full-size" && <UrlImage
        fit={fit === "fit-in-both"}
        url={url}
        height="250px"
      />
    }

    {/* Full size image */}
    {
      fit === "full-size" &&
      <img
        src={url}
        alt="page content"
        style={{ width: "100%" }}
      />
    }

    {/* Footer */}
    <Text size="15px">{footer}</Text>

  </FlexView>
}

export default Image;
