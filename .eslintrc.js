const globs = {
  config: ['.eslintrc.js', '*.config.js'],
  typescript: ['*.ts{,x}'],
};

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'compat', '@typescript-eslint'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
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
    polyfills: ['Promise', 'Object.entries'],
  },
  rules: {
    'prettier/prettier': 2,
    'compat/compat': 2,
    'import/prefer-default-export': 0,
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
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
