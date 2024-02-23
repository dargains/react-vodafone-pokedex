import React from "react";
import Item from "./Item";

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.name} name={item.name} />
      ))}
    </ul>
  );
};

export default List;
