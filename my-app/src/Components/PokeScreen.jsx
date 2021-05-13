import ColoredLed from './ColoredLeds';
import Bars from './Bars';
import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Skillbar from './Skillbars/Skillbar';
import axios from 'axios';

const PokeScreen = ({ match }) => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [pokemonDescription, setPokemonDescription] = useState('');
  const [barSkills, setBarSkills] = useState('');

  useEffect(() => {
    const fetchSpecificItem = async () => {
      const fetchItem = await axios.get(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`);
      const item = await fetchItem.data;

      const speciesFetch = await axios.get(item.species.url);
      const speciesData = speciesFetch.data;
      const description = speciesData.flavor_text_entries[9].flavor_text;
      const itemStats = item.stats;

      const skills = itemStats.map((item) => {
        return { type: item.stat.name, level: item.base_stat };
      });
      setPokemonDescription(description);
      setPokemon(item);
      setBarSkills(skills);
      setLoading(false);
    };
    fetchSpecificItem();
  }, [match.params.id]);

  if (loading) {
    return 'Loading...';
  }
  return (
    <>
      <div className="poke-screen__wrapper">
        <Link to="/" className="to-home-page">
          <button>To Home Page</button>
        </Link>
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
              bcolor="#1198D1"
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
          <h3 className="pokemonScreen-description">{pokemonDescription}</h3>
          <h3 className="pokeScreen-exp">Base Experience: {pokemon.base_experience}</h3>
          <h3 className="pokeScreen-height">
            {'Height ' + (parseInt(pokemon.height) / 10).toFixed(1) + 'm'}
          </h3>
          <h3 className="pokeScreen-weight">Weight: {parseInt(pokemon.weight) / 10} kg </h3>
          <div className="skill-bars">
            {barSkills.map((item, index) => {
              return <Skillbar key={index} name={item.type} level={item.level} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default PokeScreen;
