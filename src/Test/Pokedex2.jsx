import Navbar from '../Components/Navbar';
import PokeScreen from '../Components/PokeScreen';

import React from 'react';

function Pokedex() {
  return (
    <>
      <Navbar />
      <section className="poke-screen__wrapper">
        <PokeScreen />
      </section>
    </>
  );
}

export default Pokedex;
