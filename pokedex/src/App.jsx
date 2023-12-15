import './App.css'
import PokemonCard from "./components/PokemonCard"
import { useState } from "react";
import NavBar from "./components/NavBar"
import { useEffect } from 'react';

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

  function App() {
    const [selectedPokemon, setSelectedPokemon] = useState(pokemonList[0]);
  
    const handlePokemonSelection = (pokemon) => {
      setSelectedPokemon(pokemon);
    };

    useEffect(() => {
      alert("Hello Pokemon Trainer :)");
    }, []);
    
  return (
    <div>
      <NavBar
        pokemonList={pokemonList}
        handlePokemonSelection={handlePokemonSelection}
      />
      <PokemonCard pokemon={selectedPokemon} />
    </div>
  );
}

export default App
