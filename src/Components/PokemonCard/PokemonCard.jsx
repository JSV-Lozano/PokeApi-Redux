import React from "react";
import { useDispatch } from "react-redux";
import { setFavorites } from "../../actions";
import "./PokemonCard.css";

function PokemonCard({ name, sprites, types,id }) {
  /*   const datas = types.map((datas) => {
    console.log(datas.type.name);
  }); */
  const dispatch = useDispatch();
  const handleFavorite = () => {
    dispatch(setFavorites({id}))
    setHeart(!heart)
  }
  const [heart, setHeart] = React.useState(false);
  return (
    <div className="Card nes-table is-bordered">
      <img src={sprites} />
      <h2>{name}</h2>
      {types.map((data) => (
        <p
        key={data.type.name}
        >{data.type.name}</p>
      ))}
      <button className="btn-heart" onClick={handleFavorite}>
        {heart ? (
          <i className="nes-icon is-large heart"></i>
        ) : (
          <i className="nes-icon is-large is-transparent heart"></i>
        )}
      </button>
    </div>
  );
}

export default PokemonCard;
