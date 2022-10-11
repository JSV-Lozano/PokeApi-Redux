import React from "react";
import "./Searcher.css";

function Searcher() {
  return (
    <div className="nes-field">
      <input
        type="text"
        id="name_field"
        className="nes-input nes-pointer"
        placeholder="Buscar Pokemons"
      />
      <button type="button" className="nes-btn is-primary">
        Buscar
      </button>
    </div>
  );
}

export default Searcher;
