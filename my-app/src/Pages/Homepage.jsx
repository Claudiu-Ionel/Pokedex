import React from 'react';
import Navbar from '../Components/Navbar';
import PokemonData from '../Components/PokemonData';

function Homepage({ goToPokedex }) {
  return (
    <>
      <Navbar />
      <PokemonData goToPokedex={goToPokedex} />
    </>
  );
}

export default Homepage;
