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

const App = () => {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePreviousClick = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div>
      <h1>{pokemonList[pokemonIndex].name}</h1>
      {pokemonList[pokemonIndex].imgSrc && (
        <img
          src={pokemonList[pokemonIndex].imgSrc}
          alt={pokemonList[pokemonIndex].name}
        />
      )}

      <button onClick={handlePreviousClick} disabled={pokemonIndex === 0}>
        Précédent
      </button>
      <button
        onClick={handleNextClick}
        disabled={pokemonIndex === pokemonList.length - 1}
      >
        Suivant
      </button>
    </div>
  );
};

export default App;

