import React from "react";
import "./PokemonCard.css";

function PokemonCard({ pokemon }) {
  return (
    <>
      <figure className="card">
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} className="card-img" />
        ) : (
          <p>???</p>
        )}
      </figure>
      <figcaption>{pokemon.name}</figcaption>
    </>
  );
}

export default PokemonCard;
