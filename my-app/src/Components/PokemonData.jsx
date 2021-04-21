import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import classNamesHelper from 'classnames';
function PokemonData() {
  const [pokemonList, getPokemon] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let pokeList = [];
    for (let i = 1; i < 152; i++) {
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((response) => {
        // console.log(response.data);
        pokeList.push(response.data);
      });
    }
    getPokemon(pokeList);

    let pokeTypesAll = pokeList.map((item) => {
      return item.types[0].type.name;
    });
    console.log(pokeTypesAll);
    let uniqueChars = [...new Set(pokeTypesAll)];
    console.log(uniqueChars);
  };
  return (
    <div className="pokemonList">
      {pokemonList.map((item) => {
        return (
          <div
            className={classNamesHelper(
              'pokemon-card',
              item.types[0].type.name && `${item.types[0].type.name}`,
            )}
            key={item.id}
          >
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
        );
      })}
    </div>
  );
}

export default PokemonData;
