const withSass = require('@zeit/next-sass');
require('dotenv').load();

module.exports = {
  publicRuntimeConfig: {
    apiKey: process.env.API_KEY,
  },
  webpack: withSass().webpack,
};
