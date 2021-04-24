import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import classNamesHelper from 'classnames';
import { Link } from 'react-router-dom';

function PokemonData() {
  const [pokemonList, getPokemon] = useState([]);
  // const [pokemonList2, getPokemon2] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   async function fetchData2() {
  //     let pokeList;
  //     try {
  //       const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  //       const fetchedData = await response.data.results;
  //       pokeList = fetchedData;
  //       console.log(pokeList);
  //     } catch (error) {
  //       console.log('👷 error: 👷', error);
  //     }
  //     const pokemonData = [];
  //     console.log(pokeList);
  //     const fetchPokemon = pokeList.map(async (item) => {
  //       try {
  //         console.log(item);
  //         const response = await axios.get(item.url);
  //         const fetchedData = await response.data;
  //         console.log(fetchedData);
  //         pokemonData.push(fetchedData);
  //       } catch (error) {
  //         console.log('👷 error: 👷', error);
  //       }
  //     });
  //     getPokemon2(pokemonData);
  //   }
  //   fetchData2();
  // }, []);
  const fetchData = async () => {
    let pokeList = [];
    for (let i = 1; i < 152; i++) {
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((response) => {
        // console.log(response.data);
        pokeList.push(response.data);
      });
    }
    getPokemon(pokeList);

    // let pokeTypesAll = pokeList.map((item) => {
    //   return item.types[0].type.name;
    // });
    // console.log(pokeTypesAll);
    // let uniqueChars = [...new Set(pokeTypesAll)];
    // console.log(uniqueChars);
  };

  return (
    <div className="pokemonList">
      {pokemonList.map((item) => {
        return (
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
              <img
                className="pokemon-img"
                src={item.sprites.other['official-artwork']['front_default']}
                alt=""
              />
              <div className="pokemon-name">
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </div>
              <div>Type: {item.types[0].type.name}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default PokemonData;
