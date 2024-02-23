import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const RenderPokemon = ({ name, sprites, types, stats, cries }) => (
  <>
    <h2 id="name">{name} </h2>
    <figure>
      <img src={sprites.front_default} alt={`${name} front`} />
      <img src={sprites.back_default} alt={`${name} back`} />
    </figure>
    <audio src={cries.legacy} controls></audio>
    <h3>{`Type${types.length > 1 ? "s" : ""}:`}</h3>
    <p>{types.map((type) => type.type.name).join(" and ")}</p>
    <h3>Stats:</h3>
    {stats.map((stat) => (
      <p>
        {stat.stat.name}: {stat.base_stat}
      </p>
    ))}
  </>
);

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
          <RenderPokemon {...pokemon} />
        ) : (
          <div>loading...</div>
        )}
      </div>
      <Link to="/">back to the list</Link>
    </section>
  );
};

export default Pokemon;
