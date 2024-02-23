import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
    <section>
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          id="search"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />
        <Link to={`/pokemon/${query}`}>
          <button>Search</button>
        </Link>
      </div>
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
    </section>
  );
};

export default Home;
