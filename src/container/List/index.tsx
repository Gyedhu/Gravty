import React from "react";
import { FlexView, Text } from "../../components";

interface Props {
  listItems: Array<string>;
  type?: "decimal" | "rouded" | "square" | "upper-alpha";
}

const List: React.FC<Props> = ({ listItems, type }) => {
  return <FlexView>
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
