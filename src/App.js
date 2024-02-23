import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <div className="App">
      <h1>Pokédex</h1>
      <Routes>
        <Route path="/:page?" element={<Home />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
        <Route path="*" element={PageNotFound} />
      </Routes>
    </div>
  );
};

export default App;
