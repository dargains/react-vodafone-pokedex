import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import PageNotFound from "./components/PageNotFound";

const App = () => {
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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              getItems={getItems}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          }
        />
        <Route path="/pokemon/:name" element={<Pokemon />} />
        <Route path="*" element={PageNotFound} />
      </Routes>
    </div>
  );
};

export default App;
