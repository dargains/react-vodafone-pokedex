import React from "react";
import Item from "./Item";

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item name={item.name}></Item>
      ))}
    </ul>
  );
};

export default List;
