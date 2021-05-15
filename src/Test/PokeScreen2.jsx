import ColoredLed from './ColoredLeds';
import Bars from './Bars';
import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Skillbar from './Skillbars/Skillbar';
import axios from 'axios';
import EvolutionChain from './EvolutionChain/EvolutionChain';

const PokeScreen = ({ match }) => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [pokemonDescription, setPokemonDescription] = useState('');
  const [barSkills, setBarSkills] = useState('');
  const [firstEvolution, setFirstEvolution] = useState(null);
  const [secondEvolution, setSecondEvolution] = useState(null);
  const [evolvesTo, setEvolvesTo] = useState({});
  const [evolvesFrom, setEvolvesFrom] = useState({});

  useEffect(() => {
    const fetchSpecificItem = async () => {
      const fetchItem = await axios.get(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`);
      const item = await fetchItem.data;
      const speciesFetch = await axios.get(item.species.url);
      const speciesData = speciesFetch.data;

      if (speciesData?.evolution_chain) {
        const evolutionChain = await axios.get(speciesData.evolution_chain.url);

        const evolutionChainData = evolutionChain.data;
        console.log('evolutionChainData is ', evolutionChainData);

        if (evolutionChainData.chain.evolves_to[0]?.evolves_to[0]?.species) {
          const SecondEvolutionFetch = await axios.get(
            evolutionChainData.chain.evolves_to[0].evolves_to[0].species.url,
          );
          const secondEvolutionData = SecondEvolutionFetch.data;
          const secondEvolutionName = secondEvolutionData.name;
          const secondEvolutionImgFetch = await axios.get(
            secondEvolutionData.varieties[0].pokemon.url,
          );
          const secondEvolutionImg =
            secondEvolutionImgFetch.data.sprites.other['official-artwork'].front_default;

          setSecondEvolution({
            name: secondEvolutionName,
            img: secondEvolutionImg,
          });
        } else {
          setSecondEvolution(false);
        }
        const firstEvolution = evolutionChainData.chain.evolves_to[0].species;

        if (firstEvolution) {
          const firstEvolutionFetch = await axios.get(
            evolutionChainData.chain.evolves_to[0].species.url,
          );
          // console.log('firstEvolutionFetchData is ', firstEvolutionFetch.data);
          const firstEvolutionName = firstEvolutionFetch.data.name;
          // console.log(firstEvolutionName);
          const firstEvolutionImgFetch = await axios.get(
            firstEvolutionFetch.data.varieties[0].pokemon.url,
          );
          // console.log(firstEvolutionImgFetch.data);
          const firstEvolutionImg =
            firstEvolutionImgFetch.data.sprites.other['official-artwork'].front_default;
          // console.log(firstEvolutionImg);

          setFirstEvolution({
            name: firstEvolutionName,
            img: firstEvolutionImg,
          });
        } else {
          setFirstEvolution(false);
        }
      } else {
        setEvolvesTo(false);
      }

      // console.log(speciesData);
      if (speciesData?.evolves_from_species) {
        const evolvesFromFetch = await axios?.get(speciesData.evolves_from_species.url);
        const evolvesFromData = evolvesFromFetch.data;
        const evolvesFromName = evolvesFromData.name;
        const evolvesFromImgFetch = await axios.get(evolvesFromData.varieties[0].pokemon.url);
        const evolvesFromImgData = evolvesFromImgFetch.data;
        const evolvesFromImg = evolvesFromImgData.sprites.other['official-artwork'].front_default;
        // console.log('evolvesFromData', evolvesFromData);
        // console.log('evolvesFromName', evolvesFromName);
        // console.log('evolvesFromImg', evolvesFromImg);

        setEvolvesFrom({
          name: evolvesFromName,
          img: evolvesFromImg,
        });
      } else {
        setEvolvesFrom(false);
      }

      // console.log(evolvesToDataName);
      // console.log(evolvesToData);
      const text = speciesData.flavor_text_entries[9].flavor_text;
      const itemStats = item.stats;

      const skills = itemStats.map((item) => {
        return { type: item.stat.name, level: item.base_stat };
      });
      // setEvolvesTo(evolvesToData);
      setPokemonDescription(text);
      setPokemon(item);
      setBarSkills(skills);
      setLoading(false);
    };
    fetchSpecificItem();
  }, [match.params.id]);

  // console.log('firstEvolution is ', firstEvolution);
  // console.log('secondEvolution is ', secondEvolution);
  // console.log('evolvesFrom is ', evolvesFrom);
  if (loading) {
    return 'Loading...';
  }
  return (
    <>
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
          <EvolutionChain
            evolvesFrom={evolvesFrom}
            firstEvolution={firstEvolution}
            secondEvolution={secondEvolution}
            currentEvolution={pokemon}
          />
          {/* <div className="evolution-wrapper">
            <div className="evolution">
              {evolvesFrom ? (
                <>
                  <span>Evolves From: </span>
                  <img className="evolution-img" src={evolvesFrom.img} alt={evolvesFrom.name} />
                </>
              ) : (
                <span>{`Evolves from: Null`}</span>
              )}
            </div>
            <div className="evolution"></div>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default PokeScreen;
