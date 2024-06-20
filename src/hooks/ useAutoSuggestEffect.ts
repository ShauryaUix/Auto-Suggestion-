import { useCallback, useEffect, useState } from 'react';
import debounce from '../utils/debounce';
import fetchDataFromApi from '../services/fetchDataFromApi';

const useAutoSuggestEffect = (query: string) => {
  const [data, setData] = useState([]);

  const debouncedQueryService = useCallback(
    debounce((query: string) => {
      if (query.length >= 1 && query.length <= 20) {
        fetchDataFromApi(query)
          .then((data) => {
            setData(data);
          })
          .catch((err) => {
            console.error('Error fetching data:', err);
          });
      } else {
        setData([]);
      }
    }, 600),
    []
  );

  useEffect(() => {
    debouncedQueryService(query);
  }, [query]);

  return data;
};

export default useAutoSuggestEffect;
