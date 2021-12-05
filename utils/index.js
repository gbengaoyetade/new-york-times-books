import { BOOK_CATEGORIES, BASE_URL } from '../constants';

const makeInitialFetch = async () => {
  const promises = BOOK_CATEGORIES.map(async (category) => {
    const response = await fetch(
      `${BASE_URL}lists/current/${category}.json?api-key=${process.env.apiKey}`,
    );
    return response.json();
  });
  return Promise.all(promises);
};

export default makeInitialFetch;
