import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from "./List";

const Home = ({ items, handlePrev, handleNext }) => {
  const [query, setQuery] = useState("");

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
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
    </section>
  );
};

export default Home;
