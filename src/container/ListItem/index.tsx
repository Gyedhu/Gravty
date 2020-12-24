import React from "react"; 
import { Text } from "../../components";

const ListItem: React.FC<ListItemTypes> = ({ children, ...props }) => {
  return <li {...props}>
    <Text size="18px"> {children} </Text>
  </li>;
}

export default ListItem;
