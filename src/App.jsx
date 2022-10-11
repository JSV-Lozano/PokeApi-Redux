import React from "react";
import Searcher from "./Components/Searcher/Searcher";
import Header from "./Components/Header/Header";
import PokemonList from "./Components/PokemonList/PokemonList";
import { getPokemons } from "./Api";
import { getPokemonsDetails } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const fetchPokemons = async () => {
      const PokemonRes = await getPokemons();
      dispatch(getPokemonsDetails (PokemonRes));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Header />
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
