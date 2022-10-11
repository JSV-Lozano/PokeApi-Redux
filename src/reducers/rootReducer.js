import { combineReducers } from "redux";
import { pokemonsReducer } from "./pokemons";
import { uiReducer } from "./ui";

//separamos la ui de la data, creamos un reducer para la UI//
const rootReducer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer,
});

export default rootReducer;
