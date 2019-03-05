const withSass = require('@zeit/next-sass');
require('dotenv').load();

module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
  webpack: withSass().webpack,
};
