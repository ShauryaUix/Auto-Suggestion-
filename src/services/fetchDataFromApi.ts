import axios from 'axios';

const fetchDataFromApi = async (query: string) => {
  const data = await axios.get(
    `https://autocomplete.clearbit.com/v1/companies/suggest?query=${query}`
  );
  return data.data;
};

export default fetchDataFromApi;
