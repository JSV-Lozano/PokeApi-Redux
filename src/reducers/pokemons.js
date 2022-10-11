import { fromJS } from "immutable";
import { SET_FAVORITES, SET_POKEMONS } from "../actions/types";

const initialState = {
  pokemons: [],
  favorites: [],
};
/* const initialState = fromJS({
  pokemons: [],
  favorites: [],
}); */
export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.pokemons };
    /* return state.setIn(["pokemons", fromJS(action.pokemons)]); */
    case SET_FAVORITES:
      const newPokemonsList = [...state.pokemons];
      const searchPokemonIndex = newPokemonsList.findIndex((pokemon) => {
        return pokemon.id === action.payload.id;
      });
      /*  const searchPokemonIndex = state.get("pokemons").findIndex((pokemon) => {
        return pokemon.get("id") === action.payload.id;
      }); */
      if (searchPokemonIndex < 0) {
        return state;
      }
      newPokemonsList[searchPokemonIndex].favorites =
        !newPokemonsList[searchPokemonIndex].favorites;
    /*     const setFav = state.getIn(["pokemons", searchPokemonIndex, "favorites"]);
      return state.setIn(
        ["pokemons", searchPokemonIndex, "favorites"],
        !setFav
      ); */
    /* return { ...state, pokemons: newPokemonsList }; */
    default:
      return state;
  }
};
