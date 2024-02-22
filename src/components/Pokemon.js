import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Pokemon = () => {
  let { name } = useParams();

  const [pokemon, setPokemon] = useState({});

  const getPokemonData = async () => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    setPokemon(data);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return <div>{pokemon.name}</div>;
};

export default Pokemon;
