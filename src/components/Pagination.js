import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, total, ITEMS_PER_PAGE }) => {
  return (
    <footer>
      {currentPage ? <Link to={`/${currentPage - 1}`}>prev</Link> : null}
      {[...Array(Math.ceil(total / ITEMS_PER_PAGE)).keys()].map((i) => (
        <Link key={i} to={`/${i}`}>
          {i + 1}
        </Link>
      ))}
      {currentPage < Math.ceil(total / ITEMS_PER_PAGE) - 1 ? (
        <Link to={`/${currentPage + 1}`}>next</Link>
      ) : null}
    </footer>
  );
};

export default Pagination;
