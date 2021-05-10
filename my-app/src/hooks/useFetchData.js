import axios from "axios"
import { useCallback, useEffect, useState } from "react"

export default function useFetchData({ url, options = { disable: false } }) {
  const [pokemonData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);
  const [nextPokemons, setNextPokemons] = useState(null);
  const isDisabled = options.disable;

  const fetchData = useCallback(function fetchData(endpoint) {
    axios
      .get(endpoint)
      .then((res) => {
        setNextPokemons(res.data.next);
        return res.data.results;
      })
      .then((results) => {
        console.log(results);
        return Promise.all(results.map((res) => axios.get(res.url)));
      })
      .then((results) => {
        setData(results.map((res) => res.data));
        setIsLoading(false);
      }).catch((error) => {
        setIsLoading(false);
        setHasError(error);
      });

  }, []);


  useEffect(() => {
    if (!isDisabled) {
      fetchData(url)
    } else {
      setIsLoading(false)
    }
  }, [fetchData, isDisabled, url])

  return {
    data: {
      next: nextPokemons,
      results: pokemonData
    },
    isLoading: isLoading,
    hasError: hasError,
    refetch: fetchData,
  }

}

// const fetchData = useCallback(function fetchData(endpoint) {
  //   axios
  //     .get(endpoint)
  //     .then((res) => {
  //       // setInfo(res.data.next)
  //       // setNextPokemons(res.data.next);
  //       return {
  //         info: res.data.next,
  //         results: res.data.results
  //       };
  //     })
  //     .then((results) => {
  //       // console.log(results);
  //       const next = results.info;
  //       const result = []
  //       const fetchedResults = () => {

  //         results.results.map(async (res) => {

  //           const apiCallResponse = await axios.get(res.url)
  //           result.push(apiCallResponse.data)
  //         });
  //       }
  //       fetchedResults();

  //       const dataAll = {
  //         info: next,
  //         results: result
  //       }
  //       return dataAll;
  //     })
  //     .then((results) => {
  //       console.log(results);
  //       setData(results);
  //       setIsLoading(false);
  //     }).catch(function (error) {
  //       setIsLoading(false);
  //       setHasError(error);
  //     });

  // }, []);