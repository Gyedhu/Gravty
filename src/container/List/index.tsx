import React from "react";

// Components
import {
  FlexView,
  Text
} from "../../components";
import { ListProps } from "../PageElementTypes";

const List: React.FC<ListProps> = ({ title, listItems, type }) => {
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
