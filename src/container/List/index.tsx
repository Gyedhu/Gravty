import React from "react";

// Components
import {
  FlexView,
  Text
} from "../../components";
import { ListStyleTypes } from "../PageListMap/types";

interface Props {
  title?: string;
  listItems: Array<string>;
  type?: ListStyleTypes;
}

const List: React.FC<Props> = ({ title, listItems, type }) => {
  return <FlexView direction="column">
    {title && <Text size="22px">{title}</Text>}
    <ul style={{ listStyleType: type }}>
      {
        listItems
          ? listItems.map((value, index) =>
            <li key={index}>
              <Text size="18px">{value}</Text>
            </li>
          )
          : ""
      }
    </ul>
  </FlexView >
}

export default List;
