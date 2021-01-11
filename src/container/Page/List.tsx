import React from "react";

// Components
import {
  FlexView,
  Text
} from "../../components";


// types
import { ListProps } from "../../types/pageElements";


const List: React.FC<ListProps> = ({ title, listItems, type }) => {
  return <FlexView direction="column" paddingHorizontal="20px" paddingVertical="10px">

    {/* Title */}
    {title && <Text size="22px">{title}</Text>}

    {/* List */}
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
