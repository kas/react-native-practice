module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'max-len': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-did-mount-set-state': 0,
    'react/no-string-refs': 1,
    'react/prop-types': [0, { ignore: ['navigation'] }],
  },
};
