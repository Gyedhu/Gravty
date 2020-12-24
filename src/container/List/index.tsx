import React from "react";
import ListItem from "../ListItem"  
 

const List: React.FC<ListTypes> = ({ items, type }) => {
  return <>
    <ul style={{ listStyleType: type }}>
      {
        items && items.map((value, index) =>
          <ListItem key={index}>{value}</ListItem>
        )
      }
    </ul>
  </>
}

export default List;
