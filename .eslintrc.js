module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'prettier',
      'prettier/@typescript-eslint',
      'prettier/react',
    ],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    rules: {
      // Add specific rules or overrides here
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  