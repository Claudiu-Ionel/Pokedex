import axios from "axios"
import { useEffect, useState } from "react"

export default function useFetchData(apiEndpoint, dependency) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const apiCallResponse = await axios.get(apiEndpoint)

        setData(apiCallResponse.data.results)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        setHasError(error)
      }
    }

    fetchData()
  }, [apiEndpoint])

  const fecthedDataState = {
    data: data,
    isLoading: isLoading,
    hasError: hasError,
  }

  return fecthedDataState
}