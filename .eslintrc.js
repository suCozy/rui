// off = 0, warn = 1, error= 2 로 통일 부탁드립니다

module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    // react
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
    'react/no-unused-state': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-wrap-multilines': 0,
    'react/require-default-props': 0,
    'react/no-unescaped-entities': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    // 웹 접근성
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/media-has-caption': 0,
    // Javascript
    'arrow-body-style': [2, 'as-needed'],
    'consistent-return': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'no-async-promise-executor': 0,
    'no-restricted-syntax': 0,
    'no-await-in-loop': 0,
    'prefer-destructuring': [
      2,
      {
        object: true,
        array: false,
      },
    ],
    // Module
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/consistent-type-imports': [
      2,
      { disallowTypeAnnotations: false },
    ],
    'import/extensions': [
      2,
      'never',
      { styles: 'always', types: 'always', json: 'always' },
    ],
    'import/order': [
      2,
      {
        groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling']],
        pathGroups: [
          {
            pattern: './**',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: '../**',
            group: 'parent',
            position: 'after',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    // typescript eslint
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
    ],
  },
  env: {
    browser: true,
  },
  ignorePatterns: ['rollup.config.mjs'],
};
