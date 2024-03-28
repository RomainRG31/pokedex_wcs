import React from "react";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const handleClickPrev = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <div className="btn">
      <button onClick={handleClickPrev} disabled={pokemonIndex <= 0}>
        Précédent
      </button>
      <button
        onClick={handleClickNext}
        disabled={pokemonIndex >= pokemonList.length - 1}
      >
        Suivant
      </button>
    </div>
  );
}

export default NavBar;
