const globs = {
  config: ['.eslintrc.js', '*.config.js'],
  typescript: ['*.ts{,x}'],
};

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'compat', 'typescript'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
    polyfills: ['promises'],
  },
  globals: {
    __DEV__: false,
  },
  rules: {
    'prettier/prettier': 2,
    'compat/compat': 2,
    'import/prefer-default-export': 0,
    // This rule brings false positives, is unmaintained
    // Plus 'jsx-a11y/label-has-associated-control' pretty much has it covered
    'jsx-a11y/label-has-for': 0,
  },
  overrides: [
    {
      files: globs.config,
      env: {
        node: true,
        browser: false,
      },
      rules: {
        'compat/compat': 0,
        'no-console': 0,
        'import/no-extraneous-dependencies': [2, { devDependencies: true }],
      },
    },
    {
      files: globs.typescript,
      parser: 'typescript-eslint-parser',
      rules: {
        // Get false positives to these, use TS to check for
        'no-undef': 0,
        'no-unused-vars': 0,
      },
    },
  ],
};
