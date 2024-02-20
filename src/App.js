import React, { useState } from "react";
import axios from "axios";
import List from "./components/List";

const App = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const items = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
    setItems(items);
  };

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <form>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          id="search"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />
        <button onClick={getItems}>Search</button>
      </form>
      <List items={items}></List>
    </div>
  );
};

export default App;
