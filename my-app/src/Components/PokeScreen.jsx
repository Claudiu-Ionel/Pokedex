import ColoredLed from './ColoredLeds';
import Bars from './Bars';
import Navbar from '../Components/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import SkillBar from 'react-skillbars';

const PokeScreen = ({ match }) => {
  const [pokemon, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [pokemonStats, setStats] = useState([]);
  console.log(pokemonStats);
  const [barSkills, setBarSkills] = useState(null);
  useEffect(() => {
    const fetchSpecificItem = async () => {
      const fetchItem = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`);
      const item = await fetchItem.json();
      setItem(item);
      setStats(item.stats);
      setLoading(false);
    };
    fetchSpecificItem();
  }, [match.params.id]);

  useEffect(() => {
    const skills = [];
    const setSkills = () => {
      pokemonStats.forEach((item) => {
        skills.push({ type: item.stat.name, level: item.base_stat });
      });
    };
    setSkills();
    if (!loading) {
      setBarSkills(skills);
    }
    return function cleanup() {
      setBarSkills(skills);
    };
  }, [loading, pokemonStats]);
  console.log(pokemon);

  if (loading) {
    return 'Loading...';
  }
  return (
    <>
      <Navbar />
      <Link to="/">To HomePage</Link>
      <div className="poke-screen__wrapper">
        <section className="screen-wrapper">
          <div className="screen-leds">
            <ColoredLed
              w="11px"
              h="11px"
              bcolor="#FA0707"
              border=""
              radius="50%"
              margin="0px 10px "
            />
            <ColoredLed
              w="11px"
              h="11px"
              bcolor="#FA0707"
              border=""
              radius="50%"
              margin="0px 10px "
            />
          </div>
          <div className="beeboop-leds">
            <ColoredLed
              w="80px"
              h="80px"
              bcolor="#10ABED"
              border="2px solid #fff"
              radius="50%"
              margin=""
            />
            <ColoredLed
              w="21px"
              h="21px"
              bcolor="#FA0707"
              border=""
              radius="50%"
              margin="-10px 6px 0px"
            />
            <ColoredLed
              w="21px"
              h="21px"
              bcolor="#D8DC13"
              border=""
              radius="50%"
              margin="-10px 6px 0px"
            />
            <ColoredLed
              w="21px"
              h="21px"
              bcolor="#25FA02"
              border=""
              radius="50%"
              margin="-10px 6px 0px"
            />
          </div>
          <div className="screen">
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
          </div>
          <div className="vents-wrapper">
            <Bars />
            <Bars />
          </div>
        </section>
        <section className="stats-wrapper">
          <h1 className="pokeScreen-name">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h1>
          <h1 className="pokeScreen-exp">Base Experience: {pokemon.base_experience}</h1>
          <h1 className="pokeScreen-height">
            {'Height ' + (parseInt(pokemon.height) / 10).toFixed(1) + 'm'}
          </h1>
          <h1 className="pokeScreen-weight">Weight: {parseInt(pokemon.weight) / 10} kg </h1>
          <div className="skill-bars-wrapper">
            <SkillBar skills={barSkills} />
          </div>
        </section>
      </div>
    </>
  );
};

export default PokeScreen;
