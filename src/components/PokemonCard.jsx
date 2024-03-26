import React from "react";
import "./PokemonCard.css";

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc: "./src/assets/img/bubli.png",
  },
  {
    name: "Mew",
    // imgSrc: "./src/assets/img/mew.png",
  },
];

function PokemonCard() {
  let pokemon = pokemonList[1];
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
