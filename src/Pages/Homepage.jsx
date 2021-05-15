import { useState, useEffect } from 'react';
import { useGlobalState } from '../App';
import { Link } from 'react-router-dom';

import './Homepage.css';
import SurprisedPikachu from '../Components/img/surprised_pikachu.jpg';
import PokemonCard from '../Components/PokemonCard/PokemonCard';
import SearchBar from '../Components/SearchBar/SearchBar';
import IsLoading from '../Components/IsLoading/IsLoading';
import useFetchData2 from '../hooks/useFetchData2';

function PokemonData() {
  const globalState = useGlobalState();
  const globalPokemons = globalState.pokemonDataPage;
  const setGlobalPokemons = globalState.setPokemonDataPage;
  const hasAlreadyLoadedPokemons = Boolean(globalPokemons);
  const [localPokemons, setLocalPokemons] = useState(globalPokemons);
  const [search, setSearch] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const { isLoading, hasError, data, refetch } = useFetchData2({
    url: 'https://pokeapi.co/api/v2/pokemon/',
    options: { disable: hasAlreadyLoadedPokemons },
  });

  useEffect(() => {
    if (data && hasAlreadyLoadedPokemons) {
      const updatedData = {
        next: data.next,
        results: [...localPokemons.results, ...data.results],
      };
      setLocalPokemons(updatedData);
      setGlobalPokemons(updatedData);
    } else if (data) {
      setLocalPokemons(data);
      setGlobalPokemons(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setFilteredPokemons(
      localPokemons?.results.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      }),
    );
  }, [search, localPokemons?.results]);

  const onChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  // use this to make the submit button to work. Ps don't forget to make it visible
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const searchValue = formData.get('search');
  //   setSearch(searchValue);
  // };

  // This is a another way to filter instead of using the useEffect()

  // const filteredPokemons = localPokemons?.results.filter((item) => {
  //   return item.name.toLowerCase().includes(search.toLowerCase());
  // });

  if (isLoading) {
    return <IsLoading imgSrc={SurprisedPikachu} />;
  }
  if (hasError) {
    console.log(hasError);
  }
  return (
    <>
      <SearchBar onChange={onChange} />
      <div className="pokemonList">
        {filteredPokemons?.map((item, index) => {
          return (
            <Link
              to={`${item.id}`}
              key={item.id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <PokemonCard item={item} style={{ animationDelay: `${index * 0.001}s` }} />
            </Link>
          );
        })}
      </div>
      <button
        style={{ padding: `10px`, marginBottom: `10px` }}
        onClick={() => refetch(localPokemons.next)}
      >
        Load More
      </button>
    </>
  );
}

export default PokemonData;
