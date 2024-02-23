import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const PokemonItem = ({ name, sprites, types }) => {
  return (
    <>
      <h2>{name}</h2>
      <figure>
        <img src={sprites.front_default} alt={`${name} front`} />
        <img src={sprites.back_default} alt={`${name} back`} />
      </figure>
      <p>types: {types.map((type) => type.type.name).join(" and ")}</p>
    </>
  );
};

const Pokemon = () => {
  let { name } = useParams();

  const [pokemon, setPokemon] = useState({});

  const getPokemonData = async () => {
    console.log(name);
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    setPokemon(data);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <section>
      <div>
        {Object.keys(pokemon).length ? (
          <PokemonItem {...pokemon} />
        ) : (
          <div>loading...</div>
        )}
      </div>
      <Link to="/">back to the list</Link>
    </section>
  );
};

export default Pokemon;
