import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const PokemonItem = ({ name, sprites, types, stats }) => {
  return (
    <>
      <h2>{name}</h2>
      <figure>
        <img src={sprites.front_default} alt={`${name} front`} />
        <img src={sprites.back_default} alt={`${name} back`} />
      </figure>
      <h3>{`type${types.length > 1 ? "s" : null}:`}</h3>
      <p>{types.map((type) => type.type.name).join(" and ")}</p>
      <h3>stats:</h3>
      {stats.map((stat) => (
        <p>
          {stat.stat.name}: {stat.base_stat}
        </p>
      ))}
    </>
  );
};

const Pokemon = () => {
  let { name } = useParams();

  const [pokemon, setPokemon] = useState({});

  const getPokemonData = async () => {
    const { data } = await axios.get(`${name}`);

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
