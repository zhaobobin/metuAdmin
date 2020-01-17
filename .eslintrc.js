module.exports = {
  parser: 'babel-eslint',
  extends: ['umi'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  rules: {
    'generator-star-spacing': [0],
    'consistent-return': [0],
    'react/forbid-prop-types': [0],
    'react/no-deprecated': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'global-require': [0],
    'import/prefer-default-export': [0],
    'react/jsx-no-bind': [0],
    'react/prop-types': [0],
    'react/prefer-stateless-function': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/jsx-wrap-multilines': [0],
    'no-else-return': [0],
    'no-restricted-syntax': [0],
    'import/no-extraneous-dependencies': [0],
    'no-use-before-define': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/href-no-hash': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'jsx-a11y/anchor-has-content': [0],
    'no-nested-ternary': [0],
    'arrow-body-style': [0],
    'import/extensions': [0],
    'no-bitwise': [0],
    'no-caller': [0],
    'no-cond-assign': [0],
    'no-script-url': [0],
    'import/no-unresolved': [0],
    'comma-dangle': [0],
    'object-curly-newline': [0],
    'function-paren-newline': [0],
    'no-restricted-globals': [0],
    'require-yield': [1],
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      legacyDecorators: true
    },
  },
  settings: {
    polyfills: ['fetch', 'promises'],
  },
};
