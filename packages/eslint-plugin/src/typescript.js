export default {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
    ],
  },
};
