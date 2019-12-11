const withSass = require('@zeit/next-sass');
require('dotenv').load();

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
  }),

  publicRuntimeConfig: {
    apiKey: process.env.API_KEY,
  },
  webpack: withSass().webpack,
};
