import Pokeball from './img/pokeball.png';
import OpenPokeball from './img/open-pokeball.png';
import React, { useState } from 'react';

const PokeButton = () => {
  let sidebar = document.getElementsByClassName('side-bar');
  const [sidebarOpen, setOnOff] = useState(false);
  const pokeball = document.getElementsByClassName('pokeButton-image');

  function setSidebar() {
    if (!sidebarOpen) {
      setOnOff(true);
      pokeball[0].setAttribute('src', `${OpenPokeball}`);
      sidebar[0].style.visibility = 'visible';
    } else {
      setOnOff(false);
      pokeball[0].setAttribute('src', `${Pokeball}`);
      sidebar[0].style.visibility = 'hidden';
    }
  }
  return (
    <button className="pokeButton" onClick={() => setSidebar()}>
      <img className="pokeButton-image" src={Pokeball} alt="" />
    </button>
  );
};

export default PokeButton;
