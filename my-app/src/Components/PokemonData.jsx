import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import classNamesHelper from 'classnames';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function PokemonData() {
  // const [pokemon, getPokemon] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  // const [index, setIndex] = useState(1);
  const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`);
  //       const data = await response.data;
  //       getPokemon(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, [index]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5');
        const data = await response.data;
        const results = await data.results;
        const pokeArray = [];
        results.map(async (element) => {
          try {
            console.log('in try', element);
            const response = await axios.get(element.url);
            console.log(response);
            const data = await response.data;
            pokeArray.push(data);
          } catch (error) {
            setLoading(false);
            console.log(error);
          }
        });
        setLoading(false);
        setPokemonList(pokeArray);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    console.log('loading');
    console.log(pokemonList);
  }
  // if (!isLoading) {
  //   console.log('done loading');
  //   console.log(pokemonList);
  // }
  return (
    <>
      <Navbar />
      <div className="pokemonList">
        {pokemonList.map((item) => {
          // console.log(`item is`, item);
          <Link
            to={`${item.id}`}
            key={item.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              className={classNamesHelper(
                'pokemon-card',
                item.types[0].type.name && `${item.types[0].type.name}`,
              )}
              key={item.id}
            >
              <div className="pokemon-id">#{item.id}</div>
              <div className="pokemon-img-wrapper">
                <img
                  className="pokemon-img"
                  src={item.sprites.other['official-artwork']['front_default']}
                  alt=""
                />
              </div>

              <div className="pokemon-name">
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </div>
              <div>Type: {item.types[0].type.name}</div>
            </div>
          </Link>;
        })}
      </div>
    </>
  );
}

export default PokemonData;
