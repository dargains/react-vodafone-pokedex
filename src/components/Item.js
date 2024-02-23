import React from "react";
import { Link } from "react-router-dom";

const Item = ({ name }) => (
  <li>
    <Link to={`/pokemon/${name}`}>{name}</Link>
  </li>
);

export default Item;
