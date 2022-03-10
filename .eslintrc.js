module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', '**/src/db/migrations/*.ts'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    indent: ['error', 4, { SwitchCase: 1 }],
    'prettier/prettier': ['warn', { singleQuote: true, endOfLine: 'auto', tabWidth: 4, printWidth: 120 }],
    'max-len': [
      'error',
      { code: 120, tabWidth: 4, comments: 120, ignorePattern: '^import [^,]+ from |^export | implements' },
    ],
  },
};
