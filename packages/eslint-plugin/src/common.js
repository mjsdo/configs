export default {
  extends: ['plugin:import/recommended'],
  rules: {
    //
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: ['type', 'builtin', 'external', 'internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['type'],
        warnOnUnassignedImports: true,
      },
    ],
    'import/newline-after-import': [
      'error',
      {
        count: 1,
        considerComments: true,
      },
    ],

    //
    'no-console': 'off',
    'no-duplicate-imports': 'off',
  },
};
