import { useState, useEffect } from 'react';
import { useGlobalState } from '../App';

import { Link } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import PokemonCard from './PokemonCard/PokemonCard';
// import useFetchData from '../hooks/useFetchData';
import useFetchData2 from '../hooks/useFetchData2';

function PokemonData() {
  const globalState = useGlobalState();

  const globalPokemons = globalState.pokemonDataPage;

  const setGlobalPokemons = globalState.setPokemonDataPage;

  const hasAlreadyLoadedPokemons = Boolean(globalPokemons);

  const [localPokemons, setLocalPokemons] = useState(globalPokemons);

  // console.log(hasAlreadyLoadedPokemons);
  // console.log('globalPokemons is ', globalPokemons);

  // console.log('localPokemons ', localPokemons);

  // const { isLoading, hasError, data, nextPokemons, info, refetch } = useFetchData({
  //   url: 'https://pokeapi.co/api/v2/pokemon/',
  //   disable: hasAlreadyLoadedPokemons,
  // });
  const { isLoading, hasError, fetchedData, refetch } = useFetchData2({
    url: 'https://pokeapi.co/api/v2/pokemon/',
    disable: hasAlreadyLoadedPokemons,
  });

  useEffect(() => {
    if (fetchedData && hasAlreadyLoadedPokemons) {
      const updatedData = {
        info: fetchedData.next,
        results: [...localPokemons.results, ...fetchedData.results],
      };
      setLocalPokemons(updatedData);
      setGlobalPokemons(updatedData);
    } else if (fetchedData) {
      setLocalPokemons(fetchedData);
      setGlobalPokemons(fetchedData);
    }
  }, []);

  // console.log(fetchedData);
  // useEffect(() => {
  //   if (data && hasAlreadyLoadedPokemons) {
  //     const updatedData = [...localPokemons, ...data];

  //     setLocalPokemons(updatedData);
  //     setGlobalPokemons(updatedData);
  //   } else if (data) {
  //     setLocalPokemons(data);
  //     setGlobalPokemons(data);
  //   }
  // }, [data]);

  // console.log(fetchedData);
  console.log(fetchedData);
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
        {localPokemons.results.map((item, index) => {
          return (
            <Link
              to={`${item.id}`}
              key={item.id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <PokemonCard item={item} style={{ animationDelay: `${index * 0.01}s` }} />
            </Link>
          );
        })}
      </div>
      <button style={{ padding: `10px` }} onClick={() => refetch()}>
        Load More
      </button>
    </>
  );
}

export default PokemonData;
