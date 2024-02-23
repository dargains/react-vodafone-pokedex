import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import PageNotFound from "./components/PageNotFound";

const App = () => (
  <>
    <main className="App">
      <h1>Pokédex</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
        <Route path="*" element={PageNotFound} />
      </Routes>
    </main>
    <footer>
      <p>Made By André Dargains - Vodafone Portugal</p>
    </footer>
  </>
);

export default App;
