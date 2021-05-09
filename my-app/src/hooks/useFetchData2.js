import axios from "axios"
import { useCallback, useEffect, useState } from "react"

export default function useFetchData({ url, options = { disable: false } }) {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);
  const isDisabled = options.disable;

  const [count, setCount] = useState(null);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);


  const fetchData = useCallback(async function fetchData(endpoint) {
    const results = [];
    try {
      const apiCallResponse = await axios.get(endpoint)
      const data = apiCallResponse.data
      setCount(data.count);
      setNext(data.next);
      setPrevious(data.previous);
      const url = data.results.map((item) => {
        return item.url;
      })
      console.log(url);

      Promise.all(url.map(item => axios.get(item)
        .then(res => results.push(res.data)).catch((ex) => ex)))

    } catch (error) {
      setIsLoading(false)
      setHasError(error.response.data.error)
    }
    console.log(results);
    setData(results)
    setIsLoading(false)
  }, []);
  useEffect(() => {
    if (!isDisabled) {
      fetchData(url)
    } else {
      setIsLoading(false)
    }
  }, [fetchData, isDisabled, url])

  return {
    fetchedData: {
      count: count,
      next: next,
      previous: previous,
      results: data,
    },
    isLoading: isLoading,
    hasError: hasError,
    refetch: fetchData,
  }

}

