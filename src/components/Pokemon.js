import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const RenderPokemon = ({ name, sprites, types, stats, cries }) => (
  <>
    <Name id="name">{name}</Name>
    <figure>
      <img src={sprites.front_default} alt={`${name} front`} />
      {sprites.back_default ? (
        <img src={sprites.back_default} alt={`${name} back`} />
      ) : null}
    </figure>
    <audio src={cries.legacy} controls></audio>
    <SectionTitle>{`Type${types.length > 1 ? "s" : ""}`}</SectionTitle>
    <p>{types.map((type) => type.type.name).join(" and ")}</p>
    <SectionTitle>Stats</SectionTitle>
    <table>
      <thead>
        <tr>
          <TH>Stat</TH>
          <TH>Value</TH>
        </tr>
      </thead>
      <tbody>
        {stats.map((stat) => (
          <tr key={stat.stat.name}>
            <TD>{stat.stat.name}</TD>
            <TD>{stat.base_stat}</TD>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

const Pokemon = () => {
  let { name } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const { data } = await axios.get(`${name}`);
        setPokemon(data);
      } catch {
        setIsError(true);
      }
    };
    getPokemonData();
  }, [name]);

  return (
    <section>
      <Container>
        {isError ? (
          <p>
            An error happened, please check the name of the Pokémon and try
            again
          </p>
        ) : Object.keys(pokemon).length ? (
          <RenderPokemon {...pokemon} />
        ) : (
          <div>loading...</div>
        )}
        <Footer>
          <Link to="/">👈 back to the list</Link>
        </Footer>
      </Container>
    </section>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const Name = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
`;
const SectionTitle = styled.h3`
  font-size: 1.2rem;
  text-transform: capitalize;
  margin-top: 16px;
  margin-bottom: 4px;
`;
const TH = styled.th`
  border: 1px solid black;
  padding: 8px;
  background-color: #333;
  color: #eee;
`;
const TD = styled.td`
  border: 1px solid black;
  padding: 8px;
`;
const Footer = styled.div`
  margin-top: 36px;
`;

export default Pokemon;
