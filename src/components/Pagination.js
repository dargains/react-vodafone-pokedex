import React from "react";

const Pagination = ({
  currentPage,
  total,
  handlePrev,
  handleNext,
  ITEMS_PER_PAGE,
}) => {
  return (
    <footer id="pagination">
      {currentPage ? (
        <button onClick={handlePrev} id="previous">
          prev
        </button>
      ) : null}
      <span>
        Page {currentPage + 1} of {Math.ceil(total / ITEMS_PER_PAGE)}
      </span>
      {currentPage < Math.ceil(total / ITEMS_PER_PAGE) - 1 ? (
        <button onClick={handleNext} id="next">
          next
        </button>
      ) : null}
    </footer>
  );
};

export default Pagination;
