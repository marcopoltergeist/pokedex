/* eslint-disable react/prop-types */
function NavBar(props) {
    const { pokemonList, handlePokemonSelection } = props;
  
    const handlePokemonButtonClick = (pokemon) => {
      handlePokemonSelection(pokemon);
    };
  
    return (
      <div>
        {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => handlePokemonButtonClick(pokemon)}>
            {pokemon.name}
          </button>
        ))}
      </div>
    );
  }
  
  export default NavBar
