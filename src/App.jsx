import "./App.css";
import PokemonCard from "./components/PokemonCard";
import PropTypes from "prop-types";
import NavBar from "./components/NavBar";
import { useState } from "react";

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
  const [currentPokemon, setCurrentPokemon] = useState(pokemonList[0]);
  const changePokemon = (pokemon) => {
    setCurrentPokemon(pokemon);
  };
  return (
    <div className="principal-container">
      <PokemonCard pokemon={currentPokemon} />
      <NavBar pokemonList={pokemonList} changePokemon={changePokemon} />
    </div>
  );
}

export default App;
