import React from "react";
import "./NavBar.css";

function NavBar({ pokemonList, changePokemon }) {
  return (
    <div className="btn-container">
      {pokemonList.map((pokemon) => {
        return (
          <button onClick={() => changePokemon(pokemon)} key={pokemon.name}>
            {pokemon.name}
          </button>
        );
      })}
    </div>
  );
}

export default NavBar;
