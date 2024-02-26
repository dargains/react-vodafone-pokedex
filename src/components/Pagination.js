import React from "react";
import styled from "styled-components";

const Pagination = ({
  currentPage,
  total,
  handlePrev,
  handleNext,
  ITEMS_PER_PAGE,
}) => {
  return (
    <Container id="pagination">
      {currentPage ? (
        <Button onClick={handlePrev} id="previous">
          prev
        </Button>
      ) : null}
      <span>
        Page {currentPage + 1} of {Math.ceil(total / ITEMS_PER_PAGE)}
      </span>
      {currentPage < Math.ceil(total / ITEMS_PER_PAGE) - 1 ? (
        <Button onClick={handleNext} id="next">
          next
        </Button>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  padding: 16px 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const Button = styled.button`
  background-color: #66d;
  color: #eee;
  border: 0;
  padding: 8px 16px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #33b;
  }
`;

export default Pagination;
