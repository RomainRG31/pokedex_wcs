import "./App.css";
import PokemonCard from "./components/PokemonCard";
import PropTypes from "prop-types";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

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
    if (pokemon.name === "pikachu") {
      alert("pika pikachu !!!");
    }
    setCurrentPokemon(pokemon);
  };

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  return (
    <div className="principal-container">
      <PokemonCard pokemon={currentPokemon} />
      <NavBar pokemonList={pokemonList} changePokemon={changePokemon} />
    </div>
  );
}

export default App;
