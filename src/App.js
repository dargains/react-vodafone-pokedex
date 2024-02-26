import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import PageNotFound from "./components/PageNotFound";
import "./reset.css";

const App = () => (
  <Container>
    <Header>
      <Link to="/">
        <h1>Pokédex</h1>
      </Link>
    </Header>
    <Main>
      <Routes>
        <Route path="/:page?" element={<Home />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
        <Route path="*" element={PageNotFound} />
      </Routes>
    </Main>
    <Footer>
      <p>
        Made By <a href="mailto:andre.dargains@vodafone.com">André Dargains</a>{" "}
        - Vodafone Portugal
      </p>
    </Footer>
  </Container>
);

const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Helvetica, Arial;
`;
const Header = styled.header`
  padding: 40px 16px;
  background-color: #66d;
  color: #eee;
  font-size: 2em;
`;
const Main = styled.main`
  flex: 1;
  padding: 20px 16px;
`;
const Footer = styled.footer`
  text-align: center;
  padding: 40px 24px;
  background-color: #333;
  color: #eee;
`;

export default App;
