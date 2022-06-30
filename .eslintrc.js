const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { extends: extendConfigs, overrides } = createConfig({
  type: 'frontend',
  project: './tsconfig.json',
})

module.exports = {
  extends: [...extendConfigs, 'plugin:react/recommended'],
  overrides: [...overrides],
  plugins: ['@emotion'],
  rules: {
    '@emotion/jsx-import': 'error',
  },
}
