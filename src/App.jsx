import "./App.css";
import PokemonCard from "./components/PokemonCard";
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

function App() {
  return (
    <>
      <PokemonCard pokemon={pokemonList[0]} />
    </>
  );
}

export default App;
