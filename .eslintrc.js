module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {jsx: true}
  },
  globals: {
    expect: 'readonly'  
  },
  env: {browser: true, node: true, es6: true, mocha: true},
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:ramda/recommended',
    'plugin:unicorn/recommended'
  ],
  settings: {react: {version: '16.6'}},
  plugins: [
    'sonarjs',
    'react',
    'prettier',
    'fp',
    'immutable',
    'ramda',
    'unicorn'
  ],
  rules: {
    'fp/no-arguments': 'error',
    'fp/no-delete': 'error',
    'fp/no-events': 'error',
    'fp/no-get-set': 'error',
    'fp/no-proxy': 'error',
    'fp/no-valueof-field': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'no-var': 'error',
    'no-bitwise': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'func-style': 'error',
    camelcase: 'error',
    'no-octal-escape': 'error',
    'no-implicit-globals': 'error',
    'no-fallthrough': 'off',
    'no-extend-native': 'error',
    'no-eval': 'error',
    'no-empty-function': 'error',
    'no-caller': 'error',
    'no-alert': 'error',
    'no-use-before-define': ['error', {functions: true, classes: true}],
    eqeqeq: 'off',
    'block-scoped-var': 'error',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'error',
    'require-yield': 'off',
    'no-duplicate-imports': 'error',
    'dot-notation': 'error',
    'quote-props': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],
    'object-shorthand': 'error',
    'prettier/prettier': ['error', {singleQuote: true, bracketSpacing: false}],
    'immutable/no-let': 'error',
    'immutable/no-this': 'error',
    'immutable/no-mutation': 'error',
    'unicorn/filename-case': 'off',
    'unicorn/explicit-length-check': 'off',
    'unicorn/catch-error-name': 'off',
    'sonarjs/no-all-duplicated-branches': 'error',
    'sonarjs/no-duplicated-branches': 'error',
    'sonarjs/no-element-overwrite': 'error',
    'sonarjs/no-extra-arguments': 'error',
    'sonarjs/no-identical-conditions': 'error',
    'sonarjs/no-identical-expressions': 'error',
    'sonarjs/no-one-iteration-loop': 'error',
    'sonarjs/no-redundant-boolean': 'error',
    'sonarjs/no-use-of-empty-return-value': 'error',
    'sonarjs/prefer-immediate-return': 'error',
    'sonarjs/prefer-single-boolean-return': 'error',
    'sonarjs/no-identical-functions': 'error',
    'sonarjs/prefer-while': 'error',
    'no-restricted-properties': [
      'error',
      {object: 'Object', property: 'assign', message: 'Use assoc or object spread instead.'},
      {property: 'skip', message: 'No skipped tests allowed.'},
      {property: 'only', message: 'Don\'t forget to delete the .only.'}
    ]
  }
};