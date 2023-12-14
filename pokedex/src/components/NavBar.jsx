/* eslint-disable react/prop-types */

const NavBar = ({ handlePreviousClick, handleNextClick }) => {
  return (
    <div>
      <button onClick={handlePreviousClick}>Précédent</button>
      <button onClick={handleNextClick}>Suivant</button>
    </div>
  );
};

export default NavBar;
