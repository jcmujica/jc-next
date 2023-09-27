module.exports = {
  'env': {
    'node': true,
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [
      'warning',
      2
    ],
    'linebreak-style': [
      'warning',
      'unix'
    ],
    'quotes': [
      'warning',
      'single'
    ],
    'semi': [
      'warning',
      'never'
    ],
    // Disable prop-types validation rule
    'react/prop-types': 'off',
    // Disable React scope error rule
    'react/react-in-jsx-scope': 'off'
  }
}
