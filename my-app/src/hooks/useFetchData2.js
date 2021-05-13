import axios from "axios"
import { useCallback, useEffect, useState } from "react"

export default function useFetchData({ url, options = { disable: false } }) {
  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);
  const isDisabled = options.disable;

  // const [count, setCount] = useState(null);
  // const [previous, setPrevious] = useState(null);


  const fetchData = useCallback(async function fetchData(endpoint) {
    try {
      const firstApiCall = await axios.get(endpoint)
      // console.log(firstApiCall);
      const nextApiCall = firstApiCall.data.next;
      // console.log(nextApiCall);
      const firstApiCallResult = firstApiCall.data.results;
      // console.log(firstApiCallResult);
      const secondApiCallUrls = await Promise.all(
        firstApiCallResult.map((res) => axios.get(res.url))
      )
      const secondApiCallResults = secondApiCallUrls.map((item) => item.data)
      // console.log(secondApiCallResults);
      setData({
        next: nextApiCall,
        results: secondApiCallResults,
      })
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setHasError(error)
    }

  }, []);
  // console.log(data);
  useEffect(() => {
    if (!isDisabled) {
      fetchData(url)
    } else {
      setIsLoading(false)
    }
  }, [fetchData, isDisabled, url])

  return {
    // fetchedData: {
    //   next: next,
    //   results: data,
    // },
    data: data,
    isLoading: isLoading,
    hasError: hasError,
    refetch: fetchData,
  }

}

// console.log(secondApiCallResult);
      // setData(secondApiCallResult.map((res) => res.data))

      // Promise.all(url.map(item => axios.get(item)
      //   .then(res => results.push(res.data)).catch((ex) => ex)))