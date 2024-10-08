import globals from 'globals';
import pluginJs from '@eslint/js';
import testLint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginNext from '@next/eslint-plugin-next';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import stylistic from '@stylistic/eslint-plugin';

export default [
  { files: ['./src/**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...testLint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { plugins: pluginNext, },
  {
    plugins: {
      '@stylistic/ts': stylisticTs,
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/ts/padding-line-between-statements': [
        'error',
        {
          'blankLine': 'always',
          'prev': '*',
          'next': ['enum', 'interface', 'type', 'return', 'block', 'class' ]
        }

      ],
      'no-multiple-empty-lines': [
        'error',
        { max: 1, maxEOF: 1 }
      ],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/quotes': [
        'error', 'single', { 'allowTemplateLiterals': true }
      ],
      '@stylistic/semi-spacing': 'error',
      '@stylistic/object-curly-spacing': [
        'error', 'always', { 'objectsInObjects': true }
      ],
      '@stylistic/object-curly-newline': ['error', {
        // eslint-disable-next-line @stylistic/max-len
        'ObjectExpression': { 'multiline': true, 'minProperties': 4, 'consistent': true },
        // eslint-disable-next-line @stylistic/max-len
        'ObjectPattern': { 'multiline': true, 'minProperties': 4, 'consistent': true },
        'ImportDeclaration': 'never',
        // eslint-disable-next-line @stylistic/max-len
        'ExportDeclaration': { 'multiline': true, 'minProperties': 4, 'consistent': true }
      }],
      '@stylistic/max-statements-per-line': ['error', { 'max': 1 }],
      '@stylistic/max-len': ['error', { 'code': 80 }],
      '@stylistic/key-spacing': [
        'error', { 'beforeColon': false, 'afterColon': true }
      ],
      '@stylistic/brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    }
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'semi': ['error', 'always'],
      'no-console': 'error',
      'space-infix-ops': ['error', { 'int32Hint': false }]
    }
  }
];

