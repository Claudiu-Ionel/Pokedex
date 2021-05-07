import { useState, useEffect } from 'react';
import { useGlobalState } from '../App';

import { Link } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import PokemonCard from './PokemonCard/PokemonCard';
import useFetchData from '../hooks/useFetchData';

function PokemonData() {
  const globalState = useGlobalState();

  const globalPokemons = globalState.pokemonDataPage;

  const setGlobalPokemons = globalState.setPokemonDataPage;

  const hasAlreadyLoadedPokemons = Boolean(globalPokemons);

  const [localPokemons, setLocalPokemons] = useState(globalPokemons);

  console.log(hasAlreadyLoadedPokemons);
  // console.log('globalPokemons is ', globalPokemons);

  // console.log('localPokemons ', localPokemons);

  const { isLoading, hasError, data, nextPokemons, info, refetch } = useFetchData({
    url: 'https://pokeapi.co/api/v2/pokemon/',
    disable: hasAlreadyLoadedPokemons,
  });

  useEffect(() => {
    if (data && hasAlreadyLoadedPokemons) {
      const updatedData = [...localPokemons, ...data];
      // console.log('localPokemons', localPokemons);
      setLocalPokemons(updatedData);
      setGlobalPokemons(updatedData);
    } else if (data) {
      setLocalPokemons(data);
      setGlobalPokemons(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (isLoading) {
    return 'Loading...';
  }
  if (hasError) {
    return hasError;
  }
  return (
    <>
      <Navbar />
      <div className="pokemonList">
        {globalPokemons.map((item, index) => (
          <Link
            to={`${item.id}`}
            key={item.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <PokemonCard item={item} style={{ animationDelay: `${index * 0.01}s` }} />
          </Link>
        ))}
      </div>
      <button style={{ padding: `10px` }} onClick={() => refetch(nextPokemons)}>
        Load More
      </button>
    </>
  );
}

export default PokemonData;
