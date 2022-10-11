import { getPokemonDetails } from "../Api";
import { SET_FAVORITES, SET_POKEMONS } from "./types";

export const setPokemons = (pokemons) => ({
  type: SET_POKEMONS,
  pokemons,
});

export const setFavorites = (payload) => ({
  type: SET_FAVORITES,
  payload,
});

//Redux-Thunk nos permite hacer peticiones asyncronas con redux
export const getPokemonsDetails =
  (Pokemons = []) =>
  async (dispatch) => {
    const getPokemonsData = await Promise.all(
      Pokemons.results?.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(getPokemonsData))
  };
