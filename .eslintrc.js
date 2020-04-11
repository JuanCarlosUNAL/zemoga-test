module.exports = {
  root: false,
  parser: 'babel-eslint',
  extends: [
    'airbnb',
  ],
  plugins: [
    'react-hooks',
  ],
  rules: {
    'react/forbid-prop-types': ['error', { "forbid": ['any', 'array']}],
    'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx'] }],
    'sort-imports': [1, {'ignoreDeclarationSort': true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  env: {
    'jest': true,
    "browser": true
  },
};
