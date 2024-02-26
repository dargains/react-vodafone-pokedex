import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import List from "./List";
import Pagination from "./Pagination";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const ITEMS_PER_PAGE = 10;

  const getItems = async () => {
    const {
      data: { results, count },
    } = await axios.get(
      `?limit=${ITEMS_PER_PAGE}&offset=${currentPage * ITEMS_PER_PAGE}`
    );
    setItems(results);
    setTotal(count);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getItems();
  }, [currentPage]);

  return (
    <Container>
      <SearchContainer>
        <label htmlFor="search">Search: </label>
        <Input
          type="text"
          name="search"
          id="search"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />
        <Link to={`/pokemon/${query}`}>
          <Button>Search</Button>
        </Link>
      </SearchContainer>
      <List items={items}></List>
      {total ? (
        <Pagination
          currentPage={currentPage}
          total={total}
          handlePrev={handlePrev}
          handleNext={handleNext}
          ITEMS_PER_PAGE={ITEMS_PER_PAGE}
        />
      ) : null}
    </Container>
  );
};

const Container = styled.section`
  max-width: 800px;
  margin: 0 auto;
  flex: 1;
`;

const SearchContainer = styled.section`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const Input = styled.input`
  padding: 7px;
  border-radius: 2px;
  border: 1px solid #333;
  min-width: 0;
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

export default Home;
