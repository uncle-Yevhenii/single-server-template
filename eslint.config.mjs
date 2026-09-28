import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import security from 'eslint-plugin-security';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';
import pluginJs from '@eslint/js';
import globals from 'globals';

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  security.configs.recommended,

  {
    plugins: { unicorn },
    rules: {
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/no-process-exit': 'error',
      'unicorn/catch-error-name': 'error',
      'unicorn/no-await-expression-member': 'error',
      'unicorn/prefer-top-level-await': 'error',
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
  },

  {
    files: ['eslint.config.mjs', '*.config.mjs', '*.config.cjs'],
    ...tseslint.configs.disableTypeChecked,
    languageOptions: {
      globals: globals.node,
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  {
    ...eslintPluginPrettier,
    rules: {
      ...eslintPluginPrettier.rules,
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },

  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    files: ['**/*.test.ts', '**/*.spec.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },
];
