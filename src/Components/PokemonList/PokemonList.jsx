import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";

function PokemonList({ pokemons }) {
  console.log(
    "🚀 ~ file: PokemonList.jsx ~ line 6 ~ PokemonList ~ pokemons",
    pokemons
  );
  return (
    <div className="PokemonList">
      <div className="PokemonList-container">
        {pokemons.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              sprites={pokemon.sprites.front_default}
              types={pokemon.types}
              id={pokemon.id}
            />
          );
        })}
      </div>
    </div>
  );
}
/* PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};
 */
export default PokemonList;
