import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import PropTypes from "prop-types";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const handleClickPrev = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
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
    </>
  );
}

export default App;
