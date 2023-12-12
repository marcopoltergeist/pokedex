import React from 'react';

const PokemonCard = () => {
  return (
    <figure>
      {/* Image du Pokémon */}
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />

      {/* Nom du Pokémon */}
      <figcaption>Bulbasaur</figcaption>
    </figure>
  );
};

export default PokemonCard;
