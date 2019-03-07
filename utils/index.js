import axios from 'axios';
import getConfig from 'next/config';
import { BOOK_CATEGORIES, BASE_URL } from '../constants';

const { publicRuntimeConfig } = getConfig();
const makeInitialFetch = async () => {
  const promises = BOOK_CATEGORIES.map(async (category) => {
    const response = await axios.get(
      `${BASE_URL}lists/current/${category}.json?api-key=${publicRuntimeConfig.apiKey}`,
    );
    return response.data;
  });
  return Promise.all(promises);
};

export default makeInitialFetch;
