const { Neutrino } = require('neutrino');

module.exports = {
  use: [
    'neutrino-preset-mozilla-frontend-infra/styleguide',
    ['neutrino-preset-mozilla-frontend-infra/react-components', {
      targets: {
        browsers: 'ie 9',
      },
      style: {
        extract: false,
      }
    }],
    (neutrino) => {
      if (neutrino.options.command === 'styleguide:start') {
        neutrino.config.module.rules.delete('lint');
      }

      neutrino.use('@neutrinojs/eslint', {
        extends: [
          'eslint:recommended',
          'plugin:prettier/recommended'
        ],
        plugins: ['prettier'],
        rules: {
          'prettier/prettier': 'error'
        }
      });
    },
  ],
};
