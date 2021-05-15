import PokeButton from '../Components/PokeButton';
import Pokeball from './img/pokeball.png';
import OpenPokeball from './img/open-pokeball.png';
import classNamesHelper from 'classnames';
import React, { useState } from 'react';

const SideBar = () => {
  const [sidebarOpen, setOnOff] = useState(false);

  const setSidebar = () => {
    if (!sidebarOpen) {
      setOnOff(true);
      console.log(sidebarOpen);
    } else {
      setOnOff(false);
      console.log(sidebarOpen);
    }
  };
  return (
    <>
      <div className={classNamesHelper('side-bar', sidebarOpen && 'side-bar--open')}></div>
      <PokeButton onClick={setSidebar} imgSrc={sidebarOpen ? `${OpenPokeball}` : `${Pokeball}`} />
    </>
  );
};

export default SideBar;
