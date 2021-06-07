const withPlugins = require('next-compose-plugins');

const config = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
};

module.exports = withPlugins([], config);
