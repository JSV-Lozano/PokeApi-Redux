import axios from "axios";

export const getPokemons = async () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=30")
    .then((response) => response.data)
    .catch((err) => console.error(err));
};
export const getPokemonDetails = (pokemon) => {
  return axios
    .get(pokemon.url)
    .then((response) => response.data)
    .catch((err) => console.error(err));
};
