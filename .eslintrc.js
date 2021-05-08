const configFiles = ['.eslintrc.js', '*.config.js'];

module.exports = {
  extends: 'react-app',
  plugins: ['compat'],
  ignorePatterns: ['dist', '!.eslintrc.js', '*.d.ts'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  settings: {
    react: {
      // Not using react, just putting this here to keep plugin happy
      version: '17.0.0',
    },
  },
  rules: {
    'compat/compat': 'error',
    'import/no-extraneous-dependencies': 'error',
  },
  overrides: [
    {
      files: configFiles,
      env: {
        node: true,
        browser: false,
      },
      rules: {
        'compat/compat': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
  ],
};
