import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getApi = async endPoint => {
  const response = await axios.get(`${baseUrl}${endPoint}`);
  return response.data;
};
