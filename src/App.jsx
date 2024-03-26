import "./App.css";
import PokemonCard from "./components/PokemonCard";
import PropTypes from "prop-types";

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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

function App() {
  return (
    <>
      <PokemonCard pokemon={pokemonList[0]} />
    </>
  );
}

export default App;
