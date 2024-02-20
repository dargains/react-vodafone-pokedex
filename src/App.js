import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./components/List";

const App = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState([]);

  const ITEMS_PER_PAGE = 10;

  const getItems = async () => {
    const {
      data: { results },
    } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${currentPage}`
    );
    setItems(results);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + ITEMS_PER_PAGE);
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - ITEMS_PER_PAGE);
  };

  useEffect(() => {
    getItems();
  }, [currentPage]);

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          id="search"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />
        <button onClick={getItems}>Search</button>
      </div>
      <List items={items}></List>
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default App;
