import React from "react";

// Components
import {
  FlexView,
  Text,
  UrlImage
} from "../../components";

// types 
import { TextWithImageTemplateProps } from "../../types/pageElements";


const TextWithImageTemplate: React.FC<TextWithImageTemplateProps> =
  ({ side, url, title, subTitle, border }) =>

    <FlexView gap="10px">
      {(side === "left" || side === undefined) && url &&
        <UrlImage
          border={border}
          rounded
          url={url ? url : ""}
          height="50px" width="50px"
        />
      }
      <FlexView direction="column">
        <Text align={side} size="18px">{title}</Text>
        <Text align={side} size="15px">{subTitle}</Text>
      </FlexView>
      {side === "right" && url &&
        <UrlImage
          border
          rounded
          url={url ? url : ""}
          height="50px" width="50px"
        />
      }

    </FlexView>

export default TextWithImageTemplate;
