/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@shopify/prettier',
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 'error',
    'no-useless-catch': 'error',
    'import/no-nodejs-modules': 'error',
    'import/no-default-export': 'error',
    'no-implicit-globals': 'error',
    'jest/consistent-test-it': [
      'error',
      { fn: 'test', withinDescribe: 'test' },
    ],
  },
  env: {
    node: true,
    commonjs: true,
  },
  ignorePatterns: ['dist', 'node_modules', 'bin'],
}
